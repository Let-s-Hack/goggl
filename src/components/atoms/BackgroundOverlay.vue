<template>
  <div class="BackgroundOverlay">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BackgroundOverlay extends Vue {
}
</script>

<style lang="scss" scoped>
.BackgroundOverlay {
  /*
   * 静的コーディングの段階では他のコンポーネントの制作に
   * 影響を及ぼすので、一部プロパティをコメントアウトしています
   */
  // position: fixed;
  z-index: $zIndex_backgroundOverlay;
  top: 0;
  left: 0;
  width: 100vw;
  // height: 100vh;
  background: rgba($color: #D4D4D9, $alpha: 0.87);
}
</style>
