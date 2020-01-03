<template>
  <div class="Timer">
    <GlobalHeader class="Timer_Header" />
    <BaseContent class="Timer_Content">
      <template v-if="isLoading">
        <TimerSkeletonScreen />
      </template>
      <template v-else>
        <!-- TODO: 同期中のみ表示 -->
        <LoadingBar class="Timer_LoadingBar" />
        <RecordContainer class="Timer_RecordContainer" />
        <TimerStartButton v-if="false" class="Timer_TimerStartButton" />
        <ActiveTimer v-else class="Timer_ActiveTimer" />
      </template>
    </BaseContent>
    <GlobalNav />
    <!-- TODO: 表示切り替え -->
    <TimerCreator v-if="false" />
    <TimerEditor v-if="bottomSheet.isShown('timerEditor')" />
    <ProjectSelector v-if="false" />
    <TagsSelector v-if="false" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheetBehavior from '@/store/modules/BottomSheetBehavior';
import LoadingBar from '~/atoms/LoadingBar.vue';
import TimerStartButton from '~/atoms/TimerStartButton.vue';
import ActiveTimer from '~/molecules/ActiveTimer.vue';
import BaseContent from '~/organisms/BaseContent.vue';
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
  bottomSheet = BottomSheetBehavior;

  isLoading: boolean = true;

  created() {
    if (this.isLoading) {
      setTimeout(() => { this.isLoading = false; }, loadingTime);
    }
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
