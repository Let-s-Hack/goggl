<template>
  <div class="ReportsPieChart">
    <div ref="PieChartContainer" class="ReportsPieChart_Figre">
      <canvas
        ref="pieChart"
        :width="canvasSize"
        :height="canvasSize"
        class="ReportsPieChart_Canvas"
      ></canvas>
    </div>
    <ul class="ReportsPieChart_CategoryList">
      <li v-for="(pie, index) in piePieces" :key="index" class="ReportsPieChart_Category">
        <p class="ReportsPieChart_Title"
          :style="{ borderColor: pie.color, color: pie.color }"
        >
           {{pie.projectName}}
        </p>
        <p class="ReportsPieChart_Percentage">{{pie.percentage}}%</p>
        <p class="ReportsPieChart_Time">{{pie.duration}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { forEach, get } from 'lodash';

@Component
export default class ReportsPieChart extends Vue {
  pieChartMargin: number = 54 * 2;

  canvasSize: number = (window.innerWidth - this.pieChartMargin) * 2;

  ctx?: CanvasRenderingContext2D;

  centerPosition: number = this.canvasSize / 4;

  radius: number = this.canvasSize / 4;

  // 文字の描画半径
  textRadius: number = this.radius - 8;

  canvasFontFamily: string = (
    '"Helvetica Neue", Helvetica, Arial, Verdana, Roboto, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", '
    + '"Meiryo UI", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'
  );

  // TODO: 仮データなので置き換える
  piePieces: any = [
    {
      projectName: 'プロジェクトX',
      percentage: 35,
      color: '#3F46E3',
      duration: '12:33:11',
    },
    {
      projectName: 'プロジェクトY',
      percentage: 30,
      color: '#3FE643',
      duration: '2:22:11',
    },
    {
      projectName: 'プロジェクトZ',
      percentage: 30,
      color: '#F346E3',
      duration: '12:33:11',
    },
    {
      projectName: 'プロジェクトA',
      percentage: 5,
      color: '#999',
      duration: '12:33:11',
    },
  ];

  mounted() {
    const canvas: HTMLCanvasElement = this.$refs.pieChart as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Ratina対応をするため実際のサイズの２倍で作る（CSSで実際のサイズに縮める）
    this.ctx.scale(2, 2);
    this.drawAllPiePieces();
    this.drawAllPieText();
  }

  drawAllPiePieces() {
    let beforeAngle = 0;

    forEach(this.piePieces, (pie: { percentage: number, color: string }) => {
      const firstAngle: number = beforeAngle;
      const lastAngle: number = beforeAngle + ReportsPieChart.percentageToAngle(pie.percentage);

      this.drawPiePiece(firstAngle, lastAngle, pie.color);
      beforeAngle = lastAngle;
    });
  }

  drawPiePiece(firstAngle: number, lastAngle: number, color: string) {
    if (!this.ctx) return;

    this.ctx.beginPath();
    this.ctx.arc(
      this.centerPosition,
      this.centerPosition,
      this.radius,
      (firstAngle - 90) * Math.PI / 180,
      (lastAngle - 90) * Math.PI / 180,
      false,
    );
    this.ctx.lineTo(this.centerPosition, this.centerPosition);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  drawAllPieText() {
    if (!this.ctx) return;

    let beforeAngle = 0;

    forEach(this.piePieces, (pie: { projectName: string, percentage: number }) => {
      const angle = beforeAngle + ReportsPieChart.percentageToAngle(pie.percentage);

      // 10°以下の場合はテキストを表示しない
      if (angle - beforeAngle <= 36) return;

      this.drawPieText(angle, pie.projectName, pie.percentage);
      beforeAngle = angle;
    });
  }

  drawPieText(angle: number, projectName: string, percentage: number) {
    const radian = (angle - 90) * Math.PI / 180;

    // transformをリセットして
    this.ctx!.resetTransform();
    this.ctx!.scale(2, 2);
    this.ctx!.beginPath();
    this.ctx!.fillStyle = '#FFF';
    this.ctx!.font = `600 10px ${this.canvasFontFamily}`;

    if (angle < 180) {
      // 角度が180°より小さい場合
      this.ctx!.textAlign = 'right';
      this.ctx!.translate(this.centerPosition, this.centerPosition);
      this.ctx!.translate(
        Math.cos(radian) * this.textRadius,
        Math.sin(radian) * this.textRadius,
      );
      this.ctx!.rotate((angle - 90) * Math.PI / 180);
      this.ctx!.translate(0, -10);
      this.ctx!.fillText(projectName, 0, 0);
      this.ctx!.fillText(`${percentage}%`, 0, -16);
    } else {
      // 角度が180°以上の場合は文字を反転させる
      this.ctx!.textAlign = 'left';
      this.ctx!.translate(this.centerPosition, this.centerPosition);
      this.ctx!.translate(
        Math.cos(radian) * this.textRadius,
        Math.sin(radian) * this.textRadius,
      );
      this.ctx!.rotate((angle + 180 - 90) * Math.PI / 180);
      this.ctx!.translate(0, 34);
      this.ctx!.fillText(projectName, 0, -16);
      this.ctx!.fillText(`${percentage}%`, 0, 0);
    }
  }

  static percentageToAngle(percentage: number) {
    return 360 * (percentage / 100);
  }
}
</script>

<style lang="scss" scoped>
.ReportsPieChart {
  &_Figre {
    margin: 0 54px;
  }

  &_Canvas {
    width: 100%;
  }

  &_CategoryList {
    margin-top: 22px;
  }

  &_Category {
    display: flex;
    line-height: 56px;
    padding: 0 16px;
    border-top: 1px solid #C6C6C8;
    background: #FFF;
    font-size: 1.4rem;

    &:last-child {
      border-bottom: 1px solid #C6C6C8;
    }
  }

  &_Title {
    position: relative;
    flex: 1;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;

    &::before {
      display: inline-block;
      margin-right: 8px;
      border-radius: 50%;
      // border-colorを親(.Record_Project)から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
      content: '';
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 16px;
      height: 100%;
      background: linear-gradient(to left, #FFF, rgba(#FFF, 0));
      content: '';
    }
  }

  &_Percentage {
    width: 56px;
    text-align: right;
    color: #8E8E95;
  }

  &_Time {
    width: 86px;
    text-align: right;
    letter-spacing: 0.05rem;
  }
}
</style>
