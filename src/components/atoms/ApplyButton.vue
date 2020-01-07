<template>
  <!-- TODO: callbackで押した後の処理を実行 -->
  <button class="ApplyButton">
    <span
      v-if="subText"
      class="ApplyButton_SubText"
    >{{ subText }}</span>
    <p class="ApplyButton_Text"><slot /></p>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ApplyButton extends Vue {
  @Prop({ required: false }) readonly subText?: string;
}
</script>

<style lang="scss" scoped>
.ApplyButton {
  position: relative;
  width: 100%;
  border-radius: 13px;
  background: #EFEFEF;
  text-align: center;
  font-weight: 300;

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

  &_SubText {
    display: block;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #D8D8D8;
    box-sizing: border-box;
    font-size: 1.3rem;
    color: #838484;
    letter-spacing: 0.24px;
  }

  &_Text {
    height: 56px;
    line-height: 56px;
    color: #FF3B30;
    letter-spacing: 0.36px;
    font-size: 1.9rem;
  }
}
</style>
