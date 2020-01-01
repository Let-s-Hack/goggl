<template>
  <BottomSheet class="StartDateSelector">
    <BottomSheetHeader>
      <template v-slot:icon>
        <SvgIcon name="close" />
      </template>
      <template v-slot:title>
        Start Date
      </template>
      <template v-slot:action>
        Save
      </template>
    </BottomSheetHeader>
    <!-- TODO: valueにstartTimeの日付を動的に入れる -->
    <input
      type="date"
      value="2020-01-01"
      class="StartDateSelector_Input"
    >
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
export default class StartDateSelector extends Vue {
}
</script>

<style lang="scss" scoped>
.StartDateSelector {
  display: flex;
  flex-direction: column;
  height: 240px;

  &_Input {
    flex: 1;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    font-size: 2.3rem;
    text-align: center;
    color: #333;
  }
}
</style>
