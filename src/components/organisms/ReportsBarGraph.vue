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

/**
 * 曜日を管理する配列
 * @type {string[]}
 */
const DAY_OF_WEEK: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

/**
 * 棒グラフの項目の横幅
 * @type {number}
 */
const ITEM_WIDTH: number = 30;

/**
 * 棒グラフの項目間のマージン
 * @type {number}
 */
const MARGIN: number = 12;

/**
 * 棒グラフの項目の最大の高さ
 * @type {number}
 */
const GRAPH_ITEM_MAX_HEIGHT: number = 152;

/**
 * 棒グラフの項目の最大の高さ + 最上部の目盛りの高さ
 * @type {number}
 */
const GRAPH_MAX_HEIGHT: number = 192;

/**
 * 棒グラフの横軸の高さ
 * @type {number}
 */
const GRAPH_SCALE_HEIGHT: number = 40;

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsBarGraph extends Vue {
  /**
   * canvasのコンテキスト
   * @type {CanvasRenderingContext2D|null}
   */
  ctx?: CanvasRenderingContext2D | null;

  /**
   * 縦軸の最大値
   * @type {number}
   */
  maxScale: number = 0;

  /**
   * canvasの横幅
   * @type {number}
   */
  contentWidth: number = 0;

  /**
   * canvasの高さ
   * @type {number}
   */
  contentHeight: number = 0;

  /**
   * 棒グラフの表示データ
   * - propsで渡す
   * @type {[key: string]: number}
   */
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

  /**
   * 縦軸を描画する関数
   * @return {void}
   */
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

  /**
   * 横軸を描画する関数
   * @return {void}
   */
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

  /**
   * 棒グラフの項目を描画する関数
   * @return {void}
   */
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

  /**
   * 線を描画する関数
   * @param {number} startX 開始地点のx座標
   * @param {number} startY 開始地点のy座標
   * @param {number} endX   終了地点のx座標
   * @param {number} endY   終了地点のy座標
   * @param {number} color  線の色
   * @param {number} weight 線の太さ
   * @return {void}
   */
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

  /**
   * 縦軸を描画する関数
   * @return {number}
   */
  getMaxScale(): number {
    const values: number[] = _.values(this.data);
    const maxValue: number | undefined = _.max(values);
    const minValue: number = 2;
    if (maxValue === undefined || maxValue <= minValue) {
      return minValue;
    }

    return (maxValue % 2 !== 0) ? maxValue + 1 : maxValue;
  }

  /**
   * 縦軸の項目を取得する関数
   * @return {[key: string]: number}[]
   */
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

  /**
   * 棒グラフの項目の高さを取得する関数
   * @return {[key: string]: number}[]
   */
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
