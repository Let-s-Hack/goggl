<template>
  <div class="DiscardButtonGroup">
    <ApplyButton
      sub-text="Would you like to discard this time entry?"
      class="DiscardButtonGroup_Button"
    >
      Discard
    </ApplyButton>
    <CancelButton class="DiscardButtonGroup_Button">Continue Editing</CancelButton>
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
export default class DiscardButtonGroup extends Vue {
}
</script>

<style lang="scss" scoped>
.DiscardButtonGroup {
  padding: 0 8px 8px 8px;

  &_Button + &_Button {
    margin-top: 8px;
  }
}
</style>
