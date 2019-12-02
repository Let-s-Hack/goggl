<template>
  <BottomSheet class="StartDateSelector">
    StartDateSelector
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';

@Component({
  components: {
    BottomSheet,
  },
})
export default class StartDateSelector extends Vue {
}
</script>
