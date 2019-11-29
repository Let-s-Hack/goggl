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
    <TimerCreator />
    <TimerEditor />
  </div>
</template>

<script>
import LoadingBar from '~/atoms/LoadingBar.vue';
import TimerStartButton from '~/atoms/TimerStartButton.vue';
import TimerSkeletonScreen from '~/molecules/TimerSkeletonScreen.vue';
import ActiveTimer from '~/molecules/ActiveTimer.vue';
import RecordContainer from '~/organisms/RecordContainer.vue';
import GlobalHeader from '~/organisms/GlobalHeader.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import TimerCreator from '~/organisms/TimerCreator.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';

export default {
  name: 'timer',
  components: {
    LoadingBar,
    TimerStartButton,
    TimerSkeletonScreen,
    ActiveTimer,
    RecordContainer,
    GlobalHeader,
    BaseContent,
    GlobalNav,
    TimerCreator,
    TimerEditor,
  },
};
</script>
