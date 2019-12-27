<template>
  <div class="ReportsPieChart">
    <div class="ReportsPieChart_Figure">
      <canvas
        ref="pieChart"
        :width="canvasSize"
        :height="canvasSize"
        class="ReportsPieChart_FigureInner"
      ></canvas>
    </div>
    <ul class="ReportsPieChart_ProjectList">
      <li v-for="(piece, index) in pieceGroup" :key="index" class="ReportsPieChart_Project">
        <p class="ReportsPieChart_Title"
          :style="{ borderColor: piece.color, color: piece.color }"
        >
           {{ piece.projectName }}
        </p>
        <p class="ReportsPieChart_Percent">{{piece.percent}}%</p>
        <p class="ReportsPieChart_Time">{{piece.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { forEach } from 'lodash';

const canvasMargin: number = 108;

const canvasFontFamily: string = (
  '"Helvetica Neue", Helvetica, Arial, Verdana, Roboto, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", '
  + '"Meiryo UI", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'
);

@Component
export default class ReportsPieChart extends Vue {
  ctx?: CanvasRenderingContext2D;

  canvasSize: number = 0;

  centerPosition: number = 0;

  radius: number = 0;

  // 文字の描画半径
  textRadius: number = 0;

  // TODO: 仮データなので置き換える、型をちゃんと設定する
  pieceGroup: any = [
    {
      projectName: 'プロジェクトX',
      percent: 35,
      color: '#3F46E3',
      time: '12:33:11',
    },
    {
      projectName: 'プロジェクトY',
      percent: 30,
      color: '#3FE643',
      time: '2:22:11',
    },
    {
      projectName: 'プロジェクトZ',
      percent: 30,
      color: '#F346E3',
      time: '12:33:11',
    },
    {
      projectName: 'プロジェクトA',
      percent: 5,
      color: '#999',
      time: '12:33:11',
    },
  ];

  beforeMount() {
    this.canvasSize = (window.innerWidth - canvasMargin) * 2;
    this.centerPosition = this.canvasSize / 4;
    this.radius = this.canvasSize / 4;
    this.textRadius = this.radius - 8;
  }

  mounted() {
    const canvas = this.$refs.pieChart as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    // Ratina対応をするため実際のサイズの２倍で作る（CSSで実際のサイズに縮める）
    this.ctx.scale(2, 2);
    this.drawAllPiece();
    this.drawAllDataLabel();
  }

  // TODO: 必要な時のみ更新するようにする
  update() {
    this.ctx!.resetTransform();
    this.ctx!.scale(2, 2);
    this.drawAllPiece();
    this.drawAllDataLabel();
  }

  drawAllPiece(): void {
    if (typeof this.ctx === 'undefined') return;
    let beforeAngle = 0;

    forEach(this.pieceGroup, (piece: { percent: number, color: string }) => {
      const startAngle: number = beforeAngle;
      const endAngle: number = beforeAngle + ReportsPieChart.percentToDegree(piece.percent);

      this.ctx!.beginPath();
      this.ctx!.arc(
        this.centerPosition,
        this.centerPosition,
        this.radius,
        ReportsPieChart.degreeToRadian(startAngle),
        ReportsPieChart.degreeToRadian(endAngle),
        false,
      );
      this.ctx!.lineTo(this.centerPosition, this.centerPosition);
      this.ctx!.fillStyle = piece.color;
      this.ctx!.fill();
      beforeAngle = endAngle;
    });
  }

  drawAllDataLabel(): void {
    if (typeof this.ctx === 'undefined') return;

    let beforeAngle = 0;

    forEach(this.pieceGroup, (piece: { projectName: string, percent: number }) => {
      const angle = beforeAngle + ReportsPieChart.percentToDegree(piece.percent);

      // 10°以下の場合はテキストを表示しない
      if (angle - beforeAngle <= ReportsPieChart.percentToDegree(10)) return;

      this.drawDataLabel(angle, piece.projectName, piece.percent);
      beforeAngle = angle;
    });
  }

  drawDataLabel(angle: number, projectName: string, percent: number): void {
    const radian = ReportsPieChart.degreeToRadian(angle);
    const isLessThanHalf = angle < 180;

    this.ctx!.resetTransform();
    this.ctx!.scale(2, 2);
    this.ctx!.beginPath();
    this.ctx!.fillStyle = '#FFF';
    this.ctx!.font = `600 10px ${canvasFontFamily}`;
    this.ctx!.textAlign = isLessThanHalf ? 'right' : 'left';
    this.ctx!.translate(this.centerPosition, this.centerPosition);
    this.ctx!.translate(
      Math.cos(radian) * this.textRadius,
      Math.sin(radian) * this.textRadius,
    );

    if (isLessThanHalf) {
      this.ctx!.rotate(radian);
      this.ctx!.translate(0, -10);
      this.ctx!.fillText(projectName, 0, 0);
      this.ctx!.fillText(`${percent}%`, 0, -16);
    } else {
      // 角度が180°以上の場合は文字を反転させる
      this.ctx!.rotate(ReportsPieChart.degreeToRadian(angle + 180));
      this.ctx!.translate(0, 34);
      this.ctx!.fillText(projectName, 0, -16);
      this.ctx!.fillText(`${percent}%`, 0, 0);
    }
  }

  static percentToDegree(percent: number): number {
    return 360 * (percent / 100);
  }

  static degreeToRadian(degree: number): number {
    // canvasの角度は90°から始まるため、-90°する
    return (degree - 90) * Math.PI / 180;
  }
}
</script>

<style lang="scss" scoped>
.ReportsPieChart {
  &_Figure {
    margin: 0 54px;
  }

  &_FigureInner {
    width: 100%;
  }

  &_ProjectList {
    margin-top: 22px;
  }

  &_Project {
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

  &_Percent {
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
