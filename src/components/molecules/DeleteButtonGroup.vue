<template>
  <div class="DeleteButtonGroup">
    <ApplyButton>Delete</ApplyButton>
    <CancelButton>Cancel</CancelButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ApplyButton from '~/atoms/ApplyButton.vue';
import CancelButton from '~/atoms/CancelButton.vue';

@Component({
  components: {
    ApplyButton,
    CancelButton,
  },
})
export default class DeleteButtonGroup extends Vue {
}
</script>

<style lang="scss" scoped>
.DeleteButtonGroup {
  padding: 0 8px 8px 8px;

  > button:not(:first-child) {
    margin-top: 8px;
  }
}
</style>
