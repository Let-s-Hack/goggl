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
          v-if="!activeTimerModule.isActive"
          :click-callback="Timer.clickTimerStartButton"
          class="Timer_TimerStartButton"
        />
        <ActiveTimer v-else class="Timer_ActiveTimer" />
      </template>
    </BaseContent>
    <GlobalNav />
    <!-- TODO: 表示切り替え -->
    <TimerCreator v-if="bottomSheet.isShown('timerCreator')" />
    <TimerEditor v-if="bottomSheet.isShown('timerEditor')" />
    <ProjectSelector v-if="false" />
    <TagsSelector v-if="false" />
    <DeleteButtonGroup v-if="false" />
    <DiscardButtonGroup v-if="false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import moment from 'moment';
import BottomSheetBehavior from '@/store/modules/BottomSheetBehavior';
import Loader from '@/store/modules/Loader';
import ActiveTimerModule from '@/store/modules/ActiveTimer';
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
  private Timer = Timer;

  private bottomSheet = BottomSheetBehavior;

  private loader = Loader;

  private activeTimerModule = ActiveTimerModule;

  private isLoading: boolean = Loader.isLoading('timer');

  created() {
    if (this.isLoading) {
      setTimeout(() => {
        this.isLoading = false;
        Loader.deactivate('timer');
      }, loadingTime);
    }
  }

  private static clickTimerStartButton(): void {
    const nowDatetime: string = moment().format('YYYY-MM-DD HH:mm:ss');

    BottomSheetBehavior.show('timerCreator');
    ActiveTimerModule.setStartDatetime(nowDatetime);
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
