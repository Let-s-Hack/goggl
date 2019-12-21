<template>
  <div class="BaseContent">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseContent extends Vue {
}
</script>

<style lang="scss" scoped>
.BaseContent {
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
