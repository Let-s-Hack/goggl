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
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';
import DiscardButtonGroup from '~/molecules/DiscardButtonGroup.vue';
import ProjectsSelector from '~/organisms/ProjectsSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';
import DurationSelector from '~/organisms/DurationSelector.vue';
import StartDateSelector from '~/organisms/StartDateSelector.vue';

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
