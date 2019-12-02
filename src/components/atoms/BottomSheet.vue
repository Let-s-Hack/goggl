<template>
  <div class="BottomSheet">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomSheet extends Vue {
}
</script>

<style lang="scss" scoped>
.BottomSheet {
  /*
   * 他のコンポーネントに影響を及ぼすので静的コーディングの段階ではコメントアウト
   */
  // position: fixed;
  // bottom: 0;
  width: 100vw;
  border-radius: 8px;
  background: #FFF;
}
</style>
