<template>
  <BottomSheet class="TimerCreator">
    TimerCreator
    <ProjectsSelector />
    <TagsSelector />
    <DurationSelector />
    <StartDateSelector />
    <DiscardButtonGroup />
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '@/components/molecules/BottomSheet.vue';
import DiscardButtonGroup from '@/components/molecules/DiscardButtonGroup.vue';
import ProjectsSelector from '@/components/organisms/ProjectsSelector.vue';
import TagsSelector from '@/components/organisms/TagsSelector.vue';
import DurationSelector from '@/components/organisms/DurationSelector.vue';
import StartDateSelector from '@/components/organisms/StartDateSelector.vue';

@Component({
  components: {
    BottomSheet,
    DiscardButtonGroup,
    ProjectsSelector,
    TagsSelector,
    DurationSelector,
    StartDateSelector,
  },
})
export default class TimerCreator extends Vue {
}
</script>
