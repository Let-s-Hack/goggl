<template>
  <BottomSheet class="DurationSelector">
    <BottomSheetHeader>
      <template v-slot:icon>
        <img src="/img/icons/arrow.svg">
      </template>
      <template v-slot:title>Start and stop times</template>
      <!-- TODO: クリックされたときに渡されたメソッドを実行する処理を書く -->
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
export default class DurationSelector extends Vue {
}
</script>
