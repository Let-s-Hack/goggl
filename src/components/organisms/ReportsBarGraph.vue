<template>
  <BaseCard class="ReportsBarGraph">
    <p class="ReportsBarGraph_Title">CLOCKED HOURS</p>
    <canvas
      ref="barGraphContent"
      class="ReportsBarGraph_Content"
      :width="contentWidth + 'px'"
      :height="contentHeight + 'px'"
    ></canvas>
  </BaseCard>
</template>

<script lang="ts">
import _ from 'lodash';
import moment, { Moment } from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '~/atoms/BaseCard.vue';

const dayOfWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const itemWidth: number = 30;
const margin: number = 12;
const graphItemMaxHeight: number = 152;
const graphMaxHeight: number = 192;
const graphScaleHeight: number = 40;

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsBarGraph extends Vue {
  ctx?: CanvasRenderingContext2D | null;

  maxScale: number = 0;

  contentWidth: number = 0;

  contentHeight: number = 0;

  data: {[key: string]: number} = {
    '2019-12-21': 13,
    '2019-12-22': 13,
    '2019-12-23': 9,
    '2019-12-24': 10,
    '2019-12-25': 5,
    '2019-12-26': 0,
    '2019-12-27': 3,
  }

  mounted() {
    this.contentWidth = this.$el.clientWidth;
    this.contentHeight = graphMaxHeight + graphScaleHeight;
    this.maxScale = this.getMaxScale();

    const canvas = this.$refs.barGraphContent as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
  }

  updated() {
    this.drawVerticalScale();
    this.drawHorizontalScale();
    this.drawGraphItem();
  }

  drawVerticalScale(): void {
    const self = this;
    if (self.ctx == null) return;

    const fontWidth: number = 24;
    _.forEach(this.getVerticalScale(), (scale: {[key: string]: number}) => {
      self.ctx!.fillStyle = '#C4C4C6';
      self.ctx!.font = '12px Helvetica Neue';
      self.ctx!.fillText(`${scale.hour} h`, self.contentWidth - (margin + fontWidth), scale.top - 8, fontWidth);
      self.drawLine(0, scale.top, self.contentWidth, scale.top, '#E5E5EA', 1);
    });
  }

  drawHorizontalScale(): void {
    const self = this;
    if (self.ctx == null) return;
    self.ctx!.beginPath();

    let moveLeft: number = margin;
    _.forEach(this.data, (count: number, date: string) => {
      const momentDate: Moment = moment(date);
      const weekday = dayOfWeek[momentDate.weekday()];

      self.ctx!.fillStyle = '#C4C4C6';
      self.ctx!.font = '300 13px Helvetica Neue';
      self.ctx!.fillText(weekday, moveLeft + margin, graphMaxHeight + 20);
      self.ctx!.font = '300 12px Helvetica Neue';
      self.ctx!.fillText(momentDate.format('MM-DD'), moveLeft, graphMaxHeight + 36);

      moveLeft += itemWidth + margin;
    });
  }

  drawGraphItem(): void {
    const self = this;
    if (self.ctx == null) return;
    self.ctx!.beginPath();

    let moveLeft: number = margin;
    _.forEach(self.data, (count: number, date: string) => {
      const itemHeight = self.getGraphItemHeight(count);
      if (itemHeight === 0) {
        const top = graphMaxHeight - 1;
        self.drawLine(moveLeft, top, moveLeft + itemWidth, top);
      } else {
        self.ctx!.fillStyle = '#47C3FC';
        self.ctx!.fillRect(moveLeft, graphMaxHeight, itemWidth, -itemHeight);
      }

      moveLeft += itemWidth + margin;
    });
  }

  drawLine(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string = '#000',
    weight: number = 1,
  ): void {
    this.ctx!.strokeStyle = color;
    this.ctx!.lineWidth = weight;
    this.ctx!.moveTo(startX, startY);
    this.ctx!.lineTo(endX, endY);
    this.ctx!.stroke();
  }

  getMaxScale(): number {
    const values: number[] = _.values(this.data);
    const maxValue: number | undefined = _.max(values);
    const minValue: number = 2;
    if (maxValue === undefined || maxValue <= minValue) {
      return minValue;
    }

    return (maxValue % 2 !== 0) ? maxValue + 1 : maxValue;
  }

  getVerticalScale(): {[key: string]: number}[] {
    const maxScaleTop: number = graphMaxHeight - graphItemMaxHeight;

    return [
      {
        hour: this.maxScale,
        top: maxScaleTop,
      },
      {
        hour: this.maxScale / 2,
        top: maxScaleTop + graphItemMaxHeight / 2,
      },
      {
        hour: 0,
        top: graphMaxHeight - 1,
      },
    ];
  }

  getGraphItemHeight(value: number): number {
    return graphItemMaxHeight / this.maxScale * value;
  }
}
</script>

<style lang="scss" scoped>
.ReportsBarGraph {
  padding: 16px 0;
  margin: 0px 16px;

  &_Title {
    margin-left: 12px;
    font-size: 1.2rem;
    color: #8E8E93;
  }

  &_Content {
    overflow: hidden;
  }
}
</style>
