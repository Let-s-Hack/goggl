<template>
  <div class="TagsSelector">
    <BackgroundOverlay @click.native="pageLayer.pop()" />
    <BottomSheet class="TagsSelector_Inner">
      <BottomSheetHeader
        :back-button-callback="() => pageLayer.pop()"
        :action-button-callback="() => save()"
        class="TagsSelector_Header"
      >
        <template v-slot:icon>
          <SvgIcon class="TagsSelector_CloseIcon" name="close" />
        </template>
        <template v-slot:title>Tags</template>
        <template v-slot:action>Save</template>
      </BottomSheetHeader>
      <div class="TagsSelector_ListItem">
        <SvgIcon class="TagsSelector_SearchIcon" name="search" />
        <input type="text" class="TagsSelector_Input" placeholder="Add/filter tags">
      </div>
      <ul>
        <li class="TagsSelector_ListItem">
          <span class="TagsSelector_Tag">設計</span>
          <SvgIcon class="TagsSelector_Selected" name="check-circle" />
          <!-- <span class="TagsSelector_Unselected"></span> -->
        </li>
        <li class="TagsSelector_ListItem">
          <span class="TagsSelector_Tag">MTG</span>
          <!-- <SvgIcon class="TagsSelector_Selected" name="check-circle" /> -->
          <span class="TagsSelector_Unselected"></span>
        </li>
        <li class="TagsSelector_ListItem">
          <span class="TagsSelector_Tag">実装</span>
          <SvgIcon class="TagsSelector_Selected" name="check-circle" />
          <!-- <span class="TagsSelector_Unselected"></span> -->
        </li>
        <li class="TagsSelector_ListItem">
          <span class="TagsSelector_Tag">UIデザイン</span>
          <!-- <SvgIcon class="TagsSelector_Selected" name="check-circle" /> -->
          <span class="TagsSelector_Unselected"></span>
        </li>
        <li class="TagsSelector_ListItem">
          <span class="TagsSelector_Tag">コードレビュー</span>
          <SvgIcon class="TagsSelector_Selected" name="check-circle" />
          <!-- <span class="TagsSelector_Unselected"></span> -->
        </li>
      </ul>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import BackgroundOverlay from '~/atoms/BackgroundOverlay.vue';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BackgroundOverlay,
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class TagsSelector extends Vue {
  private pageLayer = PageLayer;

  private save(): void {
    // TODO: 保存処理
    this.pageLayer.pop();
  }
}
</script>

<style lang="scss" scoped>
.TagsSelector {
  &_Inner {
    height: 100vh;
  }

  &_Header {
    margin-bottom: 15px;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_ListItem {
    display: flex;
    height: 48px;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid #C5C6C8;
    overflow: hidden;
  }

  &_SearchIcon {
    width: 10px;
    height: 10px;
    margin-right: 10px;
    fill: #C3C4C6;
  }

  &_Input {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    caret-color: #6FC53A;

    &::placeholder {
      color: #C3C4C6;
    }
  }

  &_Tag {
    font-size: 1.2rem;
    white-space: nowrap;
  }

  &_Unselected {
    position: absolute;
    right: 16px;
    width: 12px;
    height: 12px;
    border: 2px solid #B5BCC0;
    border-radius: 50%;
  }

  &_Selected {
    position: absolute;
    right: 16px;
    width: 16px;
    height: 16px;
    fill: #4CD964;
  }
}
</style>
