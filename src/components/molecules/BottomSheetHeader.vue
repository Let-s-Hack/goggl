<template>
  <div class="BottomSheetHeader">
    <button
      @click.stop.prevent="backButtonCallback()"
      class="BottomSheetHeader_BackButton"
    >
      <slot name="icon" />
    </button>
    <p class="BottomSheetHeader_Title">
      <slot name="title" />
    </p>
    <button
      @click.stop.prevent="actionButtonCallback()"
      class="BottomSheetHeader_ActionButton"
    >
      <slot name="action" />
    </button>
    <p class="BottomSheetHeader_Text">
      <slot name="text" />
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class BottomSheetHeader extends Vue {
  @Prop() backButtonCallback?: Function;

  @Prop() actionButtonCallback?: Function;
}
</script>

<style lang="scss" scoped>
.BottomSheetHeader {
  position: relative;
  width: 100%;
  line-height: 40px;
  padding: 0 16px;
  box-sizing: border-box;

  &_BackButton {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 12px;
    margin: auto -14px auto 2px;
    padding: 14px;
    box-sizing: content-box;

    > svg {
      width: 100%;
      height: 100%;
    }
  }

  &_Title {
    font-size: 1.4rem;
    text-align: center;
    letter-spacing: 0.05rem;
  }

  &_ActionButton {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 40px;
    margin-right: 16px;
    transition: color 0.2s ease;
    font-size: 1.4rem;
    color: #57DC77;

    &:active {
      color: rgba(#57DC77, 0.3);
    }
  }

  &_Text {
    position: absolute;
    top: 0;
    right: 0;
    line-height: 40px;
    margin-right: 16px;
    transition: color 0.2s ease;
    font-size: 1.4rem;
    color: #C2C8CB;
  }
}
</style>
