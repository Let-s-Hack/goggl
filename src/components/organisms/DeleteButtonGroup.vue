<template>
  <div class="DeleteButtonGroup">
    <BackgroundOverlay
      @click.native="pageLayer.pop()"
      class="DeleteButtonGroup_BackgroundOverlay"
    />
    <div class="DeleteButtonGroup_Inner">
      <ApplyButton
        @click.native="applyButtonCallback()"
        class="DeleteButtonGroup_Button"
      >Delete</ApplyButton>
      <CancelButton
        @click.native="pageLayer.pop()"
        class="DeleteButtonGroup_Button"
      >Cancel</CancelButton>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
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
export default class DeleteButtonGroup extends Vue {
 @Prop({ required: true }) applyButtonCallback!: Function;

  private pageLayer = PageLayer;
}
</script>

<style lang="scss" scoped>
.DeleteButtonGroup {
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
