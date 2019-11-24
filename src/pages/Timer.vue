<template>
  <div class="Timer">
    <GlobalHeader />
    <BaseContent>
      <LoadingBar />
      <TimerSkeletonScreen />
      <RecordContainer />
      <TimerActionButton />
      <ActiveTimer />
    </BaseContent>
    <GlobalNav />
    <TimerCreator />
    <TimerEditor />
  </div>
</template>

<script>
import LoadingBar from '@/components/atoms/LoadingBar.vue';
import TimerActionButton from '@/components/atoms/TimerActionButton.vue';
import TimerSkeletonScreen from '@/components/molecules/TimerSkeletonScreen.vue';
import ActiveTimer from '@/components/molecules/ActiveTimer.vue';
import RecordContainer from '@/components/organisms/RecordContainer.vue';
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import BaseContent from '@/components/organisms/BaseContent.vue';
import GlobalNav from '@/components/organisms/GlobalNav.vue';
import TimerCreator from '@/components/organisms/TimerCreator.vue';
import TimerEditor from '@/components/organisms/TimerEditor.vue';

export default {
  name: 'timer',
  components: {
    LoadingBar,
    TimerActionButton,
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
