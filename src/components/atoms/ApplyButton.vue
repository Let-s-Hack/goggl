<template>
  <div class="ApplyButton">
    <!-- TODO: 使う場所によってここのspanを出し分ける -->
    <span class="ApplyButton_Text">
      Would you like to discard this time entry?
    </span>
    <p class="ApplyButton_Title">
      Discard
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ApplyButton extends Vue {
}
</script>

<style lang="scss" scoped>
.ApplyButton {
  border-radius: 13px;
  background: #efefef;
  text-align: center;
  font-weight: 300;

  &_Text {
    display: block;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #d8d8d8;
    box-sizing: border-box;
    font-size: 1.3rem;
    color: #838484;
    letter-spacing: 0.24px;
  }

  &_Title {
    height: 56px;
    line-height: 56px;
    color: #ff3b30;
    letter-spacing: 0.36px;
    font-size: 1.9rem;
  }
}
</style>
