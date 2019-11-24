<template>
  <BottomSheet class="DurationSelector">
    DurationSelector
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '@/components/molecules/BottomSheet.vue';

@Component({
  components: {
    BottomSheet,
  },
})
export default class DurationSelector extends Vue {
}
</script>
