<template>
  <div class="RecordContainer">
    <RecordGroup />
    <RecordGroup />
    <RecordGroup />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecordGroup from '~/organisms/RecordGroup.vue';

@Component({
  components: {
    RecordGroup,
  },
})
export default class RecordContainer extends Vue {
}
</script>
