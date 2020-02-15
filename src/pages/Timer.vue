<template>
  <div class="Timer">
    <GlobalHeader class="Timer_Header" />
    <BaseContent class="Timer_Content">
      <template v-if="isLoading">
        <TimerSkeletonScreen />
      </template>
      <template v-else>
        <LoadingBar v-if="loader.isLoading('loadingBar')" class="Timer_LoadingBar" />
        <RecordContainer class="Timer_RecordContainer" />
        <TimerStartButton
          v-if="!timeRecorder.isActive"
          @click.native="showTimerCreator()"
          class="Timer_TimerStartButton"
        />
        <ActiveTimer
          v-else
          @click.native="showTimerEditor()"
          class="Timer_ActiveTimer" />
      </template>
    </BaseContent>
    <GlobalNav />
    <template v-for="(item, index) in pageLayer.pageLayerState">
      <component
        :key="index"
        :is="item.component"
        v-bind="item.attributes"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import Loader from '@/store/modules/Loader';
import TimeRecorder from '@/store/modules/TimeRecorder';
import LoadingBar from '~/atoms/LoadingBar.vue';
import TimerStartButton from '~/atoms/TimerStartButton.vue';
import ActiveTimer from '~/molecules/ActiveTimer.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalHeader from '~/organisms/GlobalHeader.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import TimerCreator from '~/organisms/TimerCreator.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';
import TimerSkeletonScreen from '~/organisms/TimerSkeletonScreen.vue';
import RecordContainer from '~/organisms/RecordContainer.vue';

const loadingTime: number = 3000;

@Component({
  components: {
    LoadingBar,
    TimerStartButton,
    ActiveTimer,
    BaseContent,
    GlobalHeader,
    GlobalNav,
    TimerSkeletonScreen,
    RecordContainer,
  },
})
export default class Timer extends Vue {
  private pageLayer = PageLayer;

  private loader = Loader;

  private timeRecorder = TimeRecorder;

  private isLoading: boolean = Loader.isLoading('timer');

  created() {
    this.pageLayer.setPage(this.constructor.name);

    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        Loader.deactivate('timer');
      }, loadingTime);
    }
  }

  private showTimerCreator(): void {
    this.pageLayer.push({ component: TimerCreator });
  }

  private showTimerEditor(): void {
    const record = this.timeRecorder.timerState;
    this.pageLayer.push({
      component: TimerEditor,
      attributes: { record },
    });
  }
}
</script>

<style lang="scss" scoped>
.Timer {
  display: flex;
  flex-direction: column;
  height: 100%;

  &_Content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #F3F2F9;
  }

  &_RecordContainer {
    flex: 1;
    padding-bottom: 72px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0);
  }

  &_LoadingBar {
    position: absolute;
    top: 0;
    z-index: $zIndex_loadingBar;
    width: 100%;
  }

  &_TimerStartButton {
    position: absolute;
    right: 12px;
    bottom: 10px;
    z-index: $zIndex_timerStartButton;
  }

  &_ActiveTimer {
    position: absolute;
    bottom: 0;
    z-index: $zIndex_activeTimer;
    width: 100%;
  }
}
</style>
