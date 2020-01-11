<template>
  <button class="CancelButton">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CancelButton extends Vue {
}
</script>

<style lang="scss" scoped>
.CancelButton {
  position: relative;
  width: 100%;
  height: 56px;
  line-height: 56px;
  border-radius: 13px;
  text-align: center;
  color: #007AFF;
  background: #FFF;
  letter-spacing: 0.36px;
  font-size: 1.9rem;
  font-weight: 500;

  &:active::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(#000, 0.03);
    border-radius: inherit;
    content: '';
  }
}
</style>
