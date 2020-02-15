<template>
  <div class="ActiveTimer">
    <div class="ActiveTimer_Duration">{{ duration | toTime }}</div>
    <div class="ActiveTimer_TitleGroup">
      <!-- TODO: 文字数が多い場合のアニメーションの実装 -->
      <span class="ActiveTimer_Title">{{ timer.title }}</span>
      <span
        v-if="timeRecorder.hasProject(timer.projectId)"
        :style="{
          borderColor: project.color,
          color: project.color
        }"
        class="ActiveTimer_Project"
      >{{ project.name }}</span>
    </div>
    <TimerStopButton
      @click.stop.native="timeRecorder.record()"
      class="ActiveTimer_Button"
    />
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import {
  Component,
  Mixins,
} from 'vue-property-decorator';
import {
  IProjectState,
  ITimerState,
} from '@/store/types';
import TimeCounterMixin from '@/mixins/TimeCounterMixin';
import ProjectManager from '@/store/modules/ProjectManager';
import TimeRecorder from '@/store/modules/TimeRecorder';
import TimerStopButton from '~/atoms/TimerStopButton.vue';

@Component({
  components: {
    TimerStopButton,
  },
})
export default class ActiveTimer extends Mixins(TimeCounterMixin) {
  private timeRecorder = TimeRecorder;

  created() {
    this.start(this.timer.startDatetime);
  }

  private get project(): IProjectState | undefined {
    return ProjectManager.getById(this.timer.projectId);
  }

  private get timer(): ITimerState {
    return this.timeRecorder.timerState;
  }
}
</script>

<style lang="scss" scoped>
.ActiveTimer {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 72px;
  padding: 16px 48px 12px 44px;
  background: #FFF;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -2px 8px 0px rgba(#424147, 0.17);
  box-sizing: border-box;
  font-size: 1.4rem;
  text-align: center;

  &_Duration {
    margin-bottom: auto;
    font-weight: 500;
    letter-spacing: 0.1rem;
  }

  &_TitleGroup {
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 4px;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 16px;
      height: 110%;
      background: linear-gradient(to right, #FFF, rgba(#FFF, 0));
      content: '';
    }

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 16px;
      height: 110%;
      background: linear-gradient(to left, #FFF, rgba(#FFF, 0));
      content: '';
    }
  }

  &_Title {
    white-space: nowrap;
  }

  &_Project {
    white-space: nowrap;

    &::before {
      display: inline-block;
      margin: 0 6px 0 8px;
      border-radius: 50%;
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      content: '';
    }
  }

  &_Button {
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
