<template>
  <div class="Timer">
    <GlobalHeader />
    <BaseContent>
      <TimerSkeletonScreen />
    </BaseContent>
    <GlobalNav />
  </div>
</template>

<script>
import GlobalHeader from '@/components/organisms/GlobalHeader.vue';
import BaseContent from '@/components/organisms/BaseContent.vue';
import GlobalNav from '@/components/organisms/GlobalNav.vue';
import TimerCreator from '@/components/organisms/TimerCreator.vue';
import TimerEditor from '@/components/organisms/TimerEditor.vue';
import TimerSkeletonScreen from '@/components/molecules/TimerSkeletonScreen.vue';
import RecordGroup from '@/components/molecules/RecordGroup.vue';
import TimerActionButton from '@/components/atoms/TimerActionButton.vue';
import LoadingBar from '@/components/atoms/LoadingBar.vue';

export default {
  name: 'timer',
  components: {
    GlobalHeader,
    BaseContent,
    GlobalNav,
    TimerSkeletonScreen,
  },
};
</script>
