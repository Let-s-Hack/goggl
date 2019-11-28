<template>
  <div class="DiscardButtonGroup">
    DiscardButtonGroup
    <ApplyButton />
    <CancelButton />
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
