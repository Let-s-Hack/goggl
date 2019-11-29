<template>
  <button class="BaseCard">
    BaseCard
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseCard extends Vue {
}
</script>

<style lang="scss" scoped>
.BaseCard {
  padding: 16px 12px;
  border-radius: 8px;
  box-shadow: 0 2px 22px 0 rgba(#424147, 0.17);
  background: #FFF;
}
</style>
