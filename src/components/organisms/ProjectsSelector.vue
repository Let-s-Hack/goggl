<template>
  <BottomSheet class="ProjectsSelector">
    ProjectsSelector
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BottomSheet,
  },
})
export default class ProjectsSelector extends Vue {
}
</script>
