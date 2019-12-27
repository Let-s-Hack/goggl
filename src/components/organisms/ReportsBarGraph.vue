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

const DAY_OF_WEEK: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const ITEM_WIDTH: number = 30;

const MARGIN: number = 12;

const GRAPH_ITEM_MAX_HEIGHT: number = 152;

const GRAPH_MAX_HEIGHT: number = 192;

const GRAPH_SCALE_HEIGHT: number = 40;

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
    this.contentHeight = GRAPH_MAX_HEIGHT + GRAPH_SCALE_HEIGHT;
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
      self.ctx!.fillText(`${scale.hour} h`, self.contentWidth - (MARGIN + fontWidth), scale.top - 8, fontWidth);
      self.drawLine(0, scale.top, self.contentWidth, scale.top, '#E5E5EA', 1);
    });
  }

  drawHorizontalScale(): void {
    const self = this;
    if (self.ctx == null) return;
    self.ctx!.beginPath();

    let moveLeft: number = MARGIN;
    _.forEach(this.data, (count: number, date: string) => {
      const momentDate: Moment = moment(date);
      const weekday = DAY_OF_WEEK[momentDate.weekday()];

      self.ctx!.fillStyle = '#C4C4C6';
      self.ctx!.font = '300 13px Helvetica Neue';
      self.ctx!.fillText(weekday, moveLeft + MARGIN, GRAPH_MAX_HEIGHT + 20);
      self.ctx!.font = '300 12px Helvetica Neue';
      self.ctx!.fillText(momentDate.format('MM-DD'), moveLeft, GRAPH_MAX_HEIGHT + 36);

      moveLeft += ITEM_WIDTH + MARGIN;
    });
  }

  drawGraphItem(): void {
    const self = this;
    if (self.ctx == null) return;
    self.ctx!.beginPath();

    let moveLeft: number = MARGIN;
    _.forEach(self.data, (count: number, date: string) => {
      const itemHeight = self.getGraphItemHeight(count);
      if (itemHeight === 0) {
        const top = GRAPH_MAX_HEIGHT - 1;
        self.drawLine(moveLeft, top, moveLeft + ITEM_WIDTH, top);
      } else {
        self.ctx!.fillStyle = '#47C3FC';
        self.ctx!.fillRect(moveLeft, GRAPH_MAX_HEIGHT, ITEM_WIDTH, -itemHeight);
      }

      moveLeft += ITEM_WIDTH + MARGIN;
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
    const maxScaleTop: number = GRAPH_MAX_HEIGHT - GRAPH_ITEM_MAX_HEIGHT;

    return [
      {
        hour: this.maxScale,
        top: maxScaleTop,
      },
      {
        hour: this.maxScale / 2,
        top: maxScaleTop + GRAPH_ITEM_MAX_HEIGHT / 2,
      },
      {
        hour: 0,
        top: GRAPH_MAX_HEIGHT - 1,
      },
    ];
  }

  getGraphItemHeight(value: number): number {
    return GRAPH_ITEM_MAX_HEIGHT / this.maxScale * value;
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
