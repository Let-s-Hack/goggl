<template>
  <div class="Timer">
    <GlobalHeader />
    <BaseContent>
      <LoadingBar />
      <TimerSkeletonScreen />
      <RecordContainer />
      <TimerStartButton />
      <ActiveTimer />
    </BaseContent>
    <GlobalNav />
    <!-- TODO: modalコンポーネントとして表示させる [ここから] -->
    <!-- 参考: https://jp.vuejs.org/v2/examples/modal.html -->
    <TimerCreator />
    <TimerEditor />
    <StartDateSelector />
    <!-- TODO: modalコンポーネントとして表示させる [ここまで] -->
  </div>
</template>

<script>
import LoadingBar from '~/atoms/LoadingBar.vue';
import TimerStartButton from '~/atoms/TimerStartButton.vue';
import ActiveTimer from '~/molecules/ActiveTimer.vue';
import RecordContainer from '~/organisms/RecordContainer.vue';
import GlobalHeader from '~/organisms/GlobalHeader.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import TimerCreator from '~/organisms/TimerCreator.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';
import StartDateSelector from '~/organisms/StartDateSelector.vue';
import TimerSkeletonScreen from '~/organisms/TimerSkeletonScreen.vue';

export default {
  name: 'timer',
  components: {
    LoadingBar,
    TimerStartButton,
    ActiveTimer,
    RecordContainer,
    GlobalHeader,
    BaseContent,
    GlobalNav,
    TimerCreator,
    TimerEditor,
    StartDateSelector,
    TimerSkeletonScreen,
  },
};
</script>
