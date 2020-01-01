<template>
  <div class="TimerSkeletonScreen">
    <div class="TimerSkeletonScreen_Header">
      <p class="TimerSkeletonScreen_Date">Today</p>
      <p class="TimerSkeletonScreen_Time">0:00:00</p>
    </div>
    <ul>
      <li class="TimerSkeletonScreen_Item">
        <div class="TimerSkeletonScreen_UpperLine"></div>
        <div class="TimerSkeletonScreen_LowerLine"></div>
      </li>
      <li class="TimerSkeletonScreen_Item">
        <div class="TimerSkeletonScreen_UpperLine"></div>
        <div class="TimerSkeletonScreen_LowerLine"></div>
      </li>
      <li class="TimerSkeletonScreen_Item">
        <div class="TimerSkeletonScreen_UpperLine"></div>
        <div class="TimerSkeletonScreen_LowerLine"></div>
      </li>
    </ul>
    <p class="TimerSkeletonScreen_Text">
      You haven't tracked time for a while.<br>
      Start the timer and your most used time entries will appear here.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerSkeletonScreen extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerSkeletonScreen {
  &_Header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 20px 16px 8px 16px;
  }

  &_Date {
    font-size: 1.5rem;
  }

  &_Time {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }

  &_Item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 64px;
    padding: 0 16px;
    border-bottom: 1px solid #EEEEEE;
    background: #FFF;

    &:first-child {
      border-top: 1px solid #EEEEEE;
    }
  }

  &_UpperLine {
    width: 80px;
    height: 6px;
    border-radius: 2px;
    background-color: #EDEDED;
  }

  &_LowerLine {
    width: 60px;
    height: 6px;
    margin-top: 12px;
    border-radius: 2px;
    background-color: #EED3FF;
  }

  &_Text {
    margin-top: 16px;
    padding: 0 20px;
    text-align: center;
    font-size: 1.5rem;
    line-height: normal;
    color: #BBBDBF;
  }
}
</style>
