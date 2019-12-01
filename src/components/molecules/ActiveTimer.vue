<template>
  <div class="ActiveTimer">
    <div class="ActiveTimer_Label">
      <div class="ActiveTimer_Time">1:43:35</div>
      <div class="ActiveTimer_TitleGroup">
        <!-- TODO: 文字数が多い場合のアニメーションの実装 -->
        <span class="ActiveTimer_Title">goggl | 静的コーディング</span>
        <span
          class="ActiveTimer_Project"
          :style="{ borderColor: '#E30909', color: '#E30909' }"
        >
          goggl
        </span>
      </div>
    </div>
    <TimerStopButton class="ActiveTimer_Button" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimerStopButton from '~/atoms/TimerStopButton.vue';

@Component({
  components: {
    TimerStopButton,
  },
})
export default class ActiveTimer extends Vue {
}
</script>

<style lang="scss" scoped>
.ActiveTimer {
  display: flex;
  height: 72px;
  background: #FFF;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #D8D8D8;
  box-shadow: 0 -2px 8px 0px rgba(#424147, 0.17);
  box-sizing: border-box;

  &_Label {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin-left: 45px;
    text-align: center;
    font-size: 1.4rem;
    overflow: hidden;
  }

  &_Time {
    font-weight: bold;
    letter-spacing: 0.1rem;
    margin-bottom: 8px;
  }

  &_TitleGroup {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 110%;
      background: linear-gradient(to right, #F9FAFC, rgba(#F9FAFC, 0));
      content: '';
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 16px;
      height: 110%;
      background: linear-gradient(to left, #F9FAFC, rgba(#F9FAFC, 0));
      content: '';
    }
  }

  &_Title {
    white-space: nowrap;
    text-overflow: clip;
  }

  &_Project {
    white-space: nowrap;
    text-overflow: clip;

    &::before {
      display: inline-block;
      margin-left: 8px;
      border-radius: 50%;
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      content: '';
    }
  }

  &_Button {
    margin: auto;
    margin-right: 11px;
  }
}
</style>
