<template>
  <BottomSheet class="TagsSelector">
    <BottomSheetHeader class="TagsSelector_Header">
      <template v-slot:icon>
        <SvgIcon class="TagsSelector_CloseIcon" name="close" />
      </template>
      <template v-slot:title>Projects</template>
      <template v-slot:action>Save</template>
    </BottomSheetHeader>
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class TagsSelector extends Vue {
}
</script>

<style lang="scss" scoped>
.TagsSelector {
  height: 100vh;

  &_Header {
    margin-bottom: 15px;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }
}
</style>
