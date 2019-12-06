<template>
  <div class="BottomSheetHeader">
    <button class="BottomSheetHeader_CloseButton">
      <slot name="icon" />
    </button>
    <p class="BottomSheetHeader_Title">
      <slot name="title" />
    </p>
    <button class="BottomSheetHeader_ActionButton">
      <slot name="action" />
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomSheetHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.BottomSheetHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  box-sizing: border-box;

  &_CloseButton {
    width: 10px;
    height: 12px;
  }

  &_Title {
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }

  &_ActionButton {
    font-size: 1.4rem;
    font-weight: bold;
    color: #57DC77;
  }
}
</style>
