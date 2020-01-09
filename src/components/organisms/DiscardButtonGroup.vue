<template>
  <div class="DiscardButtonGroup">
    <BackgroundOverlay
      @click.native="pageLayer.pop()"
      class="DiscardButtonGroup_BackgroundOverlay"
    />
    <div class="DiscardButtonGroup_Inner">
      <ApplyButton
        sub-text="Would you like to discard this time entry?"
        class="DiscardButtonGroup_Button"
      >Discard</ApplyButton>
      <CancelButton class="DiscardButtonGroup_Button">Continue Editing</CancelButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import ApplyButton from '~/atoms/ApplyButton.vue';
import BackgroundOverlay from '~/atoms/BackgroundOverlay.vue';
import CancelButton from '~/atoms/CancelButton.vue';

@Component({
  components: {
    ApplyButton,
    BackgroundOverlay,
    CancelButton,
  },
})
export default class DiscardButtonGroup extends Vue {
  private pageLayer = PageLayer;
}
</script>

<style lang="scss" scoped>
.DiscardButtonGroup {
  &_BackgroundOverlay {
    background-color: rgba(#000, 0.2);
  }

  &_Inner {
    position: fixed;
    bottom: 0;
    z-index: $zIndex_pageLayer;
    width: 100%;
    padding: 0 8px 8px 8px;
    box-sizing: border-box;
  }

  &_Button + &_Button {
    margin-top: 8px;
  }
}
</style>
