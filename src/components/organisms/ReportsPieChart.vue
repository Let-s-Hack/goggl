<template>
  <div class="ReportsPieChart">
    <div class="ReportsPieChart_FigureContainer">
      <canvas
        ref="pieChart"
        :width="canvasSize"
        :height="canvasSize"
        class="ReportsPieChart_Figure"
      ></canvas>
    </div>
    <ul class="ReportsPieChart_ProjectList">
      <li v-for="(project, index) in allProjectGroup" :key="index" class="ReportsPieChart_Project">
        <p class="ReportsPieChart_ProjectName"
          :style="{ borderColor: project.color, color: project.color }"
        >
           {{ project.name }}
        </p>
        <p class="ReportsPieChart_Percent">{{ project.time.percent }}%</p>
        <p class="ReportsPieChart_Time">{{ project.time.sum }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Ref,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { forEach } from 'lodash';

const canvasMargin: number = 108;

const canvasFontFamily: string = (
  '"Helvetica Neue", Helvetica, Arial, Verdana, Roboto, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", '
  + '"Noto Sans JP", "Meiryo UI", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'
);

const minShowDataLabelDegree = 10;

@Component
export default class ReportsPieChart extends Vue {
  @Prop({ default: false }) isLoading?: boolean;

  @Ref('pieChart') pieChartContent!: HTMLCanvasElement;

  private ctx!: CanvasRenderingContext2D | null;

  private canvasSize: number = 0;

  private centerPosition: number = 0;

  private radius: number = 0;

  // TODO: 仮データなので置き換える、型をちゃんと設定する
  private allProjectGroup: any = [
    {
      name: 'プロジェクトX',
      color: '#3F46E3',
      time: {
        percent: 35,
        sum: '12:33:11',
      },
    },
    {
      name: 'プロジェクトY',
      color: '#3FE643',
      time: {
        percent: 30,
        sum: '2:22:11',
      },
    },
    {
      name: 'プロジェクトZ',
      color: '#F346E3',
      time: {
        percent: 30,
        sum: '12:33:11',
      },
    },
    {
      name: 'プロジェクトA',
      color: '#999',
      time: {
        percent: 5,
        sum: '12:33:11',
      },
    },
  ];

  private animationFrameId: number = 0;

  beforeMount() {
    this.canvasSize = (window.innerWidth - canvasMargin) * 2;
    this.centerPosition = this.canvasSize / 4;
    this.radius = this.canvasSize / 4;
  }

  mounted() {
    const canvas = this.pieChartContent;
    this.ctx = canvas!.getContext('2d');

    if (this.isLoading) {
      this.playLoadingAnimation();
    } else {
      this.drawAllProjectGroup();
    }
  }

  // TODO: 必要な時のみ更新するようにする
  update() {
    if (this.isLoading) {
      this.playLoadingAnimation();
    } else {
      this.drawAllProjectGroup();
    }
  }

  @Watch('isLoading')
  private onChangeLoadingStatus(): void {
    if (this.isLoading) {
      this.playLoadingAnimation();
    } else {
      cancelAnimationFrame(this.animationFrameId);
      this.drawAllProjectGroup();
    }
  }

  private drawAllProjectGroup(): void {
    if (typeof this.ctx === 'undefined') return;
    let prevAngle: number = 0;

    forEach(this.allProjectGroup, (
      project: { name: string, color: string, time: { percent: number } },
    ) => {
      const startAngle: number = prevAngle;
      const endAngle: number = prevAngle + ReportsPieChart.percentToDegree(project.time.percent);
      const groupDegree = endAngle - startAngle;

      this.resetTransform();
      this.drawCircleSector(startAngle, endAngle, project.color);

      // 10°より角度が大きい場合はデータラベルを表示する
      if (groupDegree > ReportsPieChart.percentToDegree(minShowDataLabelDegree)) {
        this.drawDataLabel(endAngle, project.name, project.time.percent);
      }

      prevAngle = endAngle;
    });
  }

  private drawDataLabel(angle: number, projectName: string, percent: number): void {
    const radian: number = ReportsPieChart.degreeToRadian(angle);
    const isLessThanHalf: boolean = angle < 180;

    this.resetTransform();
    this.ctx!.beginPath();
    this.ctx!.fillStyle = '#FFF';
    this.ctx!.font = `600 10px ${canvasFontFamily}`;
    this.ctx!.textAlign = isLessThanHalf ? 'right' : 'left';
    this.ctx!.translate(this.centerPosition, this.centerPosition);
    this.ctx!.translate(
      Math.cos(radian) * (this.radius - 8),
      Math.sin(radian) * (this.radius - 8),
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

  private drawCircleSector(startAngle: number, endAngle: number, color: string): void {
    this.ctx!.beginPath();
    this.ctx!.arc(
      this.centerPosition,
      this.centerPosition,
      this.radius,
      ReportsPieChart.degreeToRadian(startAngle),
      ReportsPieChart.degreeToRadian(endAngle),
    );
    this.ctx!.lineTo(this.centerPosition, this.centerPosition);
    this.ctx!.fillStyle = color;
    this.ctx!.fill();
  }

  private playLoadingAnimation(): void {
    if (typeof this.ctx === 'undefined') return;

    this.resetTransform();
    this.drawCircleSector(0, 360, '#AEAEB2');

    const loadingAnimation = (endAngle: number): void => {
      if (endAngle > 360) return;

      this.drawCircleSector(0, endAngle, '#D2D2D8');
      this.animationFrameId = requestAnimationFrame(loadingAnimation.bind(null, endAngle + 1));
    };

    this.animationFrameId = requestAnimationFrame(loadingAnimation.bind(null, 0));
  }

  private resetTransform(): void {
    this.ctx!.resetTransform();
    // Ratina対応をするため実際のサイズの２倍で作る（CSSで実際のサイズに縮める）
    this.ctx!.scale(2, 2);
  }

  private static percentToDegree(percent: number): number {
    return 360 * (percent / 100);
  }

  private static degreeToRadian(degree: number): number {
    // canvasの角度は90°から始まるため、-90°する
    return (degree - 90) * Math.PI / 180;
  }
}
</script>

<style lang="scss" scoped>
.ReportsPieChart {
  &_FigureContainer {
    margin: 0 54px;
  }

  &_Figure {
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

  &_ProjectName {
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
