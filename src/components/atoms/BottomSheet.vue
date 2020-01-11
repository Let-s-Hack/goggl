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
  position: fixed;
  bottom: 0;
  z-index: $zIndex_pageLayer;
  width: 100vw;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: border-box;
  border-radius: 8px;
  background: #FFF;
}
</style>
