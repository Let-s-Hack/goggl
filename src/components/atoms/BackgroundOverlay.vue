<template>
  <div class="BackgroundOverlay"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BackgroundOverlay extends Vue {
}
</script>

<style lang="scss" scoped>
.BackgroundOverlay {
  position: fixed;
  z-index: $zIndex_pageLayer;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(#D4D4D9, 0.87);
}
</style>
