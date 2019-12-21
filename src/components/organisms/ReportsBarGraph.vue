<template>
  <BaseCard class="ReportsBarGraph">
    <p class="ReportsBarGraph_Title">CLOCKED HOURS</p>
    <canvas></canvas>
  </BaseCard>
</template>

<script lang="ts">
import _ from 'lodash';
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '~/atoms/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsBarGraph extends Vue {
  ctx ?: CanvasRenderingContext2D | null;

  mounted() {
    const canvas: HTMLCanvasElement | undefined = _.head(this.$el.getElementsByTagName('canvas'));
    this.ctx = canvas!.getContext('2d');
    this.draw();
  }

  draw() {
    if (this.ctx == null) return;

    this.ctx.beginPath();
    this.ctx.clearRect(0, 0, 200, 200);
    this.ctx.arc(100, 100, 50, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
</script>

<style lang="scss" scoped>
.ReportsBarGraph {
  &_Title {
    font-size: 1.2rem;
    color: #8E8E93;
  }
}
</style>
