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
          v-if="!timerModule.isActive"
          :click-callback="() => startRecording()"
          class="Timer_TimerStartButton"
        />
        <ActiveTimer v-else class="Timer_ActiveTimer" />
      </template>
    </BaseContent>
    <GlobalNav />
    <template v-for="(component, index) in pageLayer.pageLayerState">
      <component :is="component" :key="index" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import PageLayer from '@/store/modules/PageLayer';
import Loader from '@/store/modules/Loader';
import TimerModule from '@/store/modules/Timer';
import LoadingBar from '~/atoms/LoadingBar.vue';
import TimerStartButton from '~/atoms/TimerStartButton.vue';
import ActiveTimer from '~/molecules/ActiveTimer.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import DeleteButtonGroup from '~/organisms/DeleteButtonGroup.vue';
import DiscardButtonGroup from '~/organisms/DiscardButtonGroup.vue';
import GlobalHeader from '~/organisms/GlobalHeader.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import ProjectSelector from '~/organisms/ProjectSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';
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
    DeleteButtonGroup,
    DiscardButtonGroup,
    GlobalHeader,
    GlobalNav,
    ProjectSelector,
    TagsSelector,
    TimerCreator,
    TimerEditor,
    TimerSkeletonScreen,
    RecordContainer,
  },
})
export default class Timer extends Vue {
  private pageLayer = PageLayer;

  private loader = Loader;

  private timerModule = TimerModule;

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

  private startRecording(): void {
    const now: string = moment().format('YYYY-MM-DD HH:mm:ss');

    this.pageLayer.push(TimerCreator);
    TimerModule.setStartDatetime(now);
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
