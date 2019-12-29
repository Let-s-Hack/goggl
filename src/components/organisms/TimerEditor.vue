<template>
  <BottomSheet class="TimerEditor">
    TimerEditor
    <ProjectSelector />
    <TagsSelector />
    <DurationSelector />
    <StartDateSelector />
    <DiscardButtonGroup />
    <DeleteButtonGroup />
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';
import DiscardButtonGroup from '~/molecules/DiscardButtonGroup.vue';
import DeleteButtonGroup from '~/molecules/DeleteButtonGroup.vue';
import ProjectSelector from '~/organisms/ProjectSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';
import DurationSelector from '~/organisms/DurationSelector.vue';
import StartDateSelector from '~/organisms/StartDateSelector.vue';

@Component({
  components: {
    BottomSheet,
    DiscardButtonGroup,
    DeleteButtonGroup,
    ProjectSelector,
    TagsSelector,
    DurationSelector,
    StartDateSelector,
  },
})
export default class TimerEditor extends Vue {
}
</script>
