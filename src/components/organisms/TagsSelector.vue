<template>
  <BottomSheet class="TagsSelector">
    TagsSelector
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
export default class TagsSelector extends Vue {
}
</script>
