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
          <SvgIcon name="close" class="TagsSelector_CloseIcon" />
        </template>
        <template v-slot:title>Tags</template>
        <template v-slot:action>Save</template>
      </BottomSheetHeader>
      <div class="TagsSelector_ListItem">
        <SvgIcon name="search" class="TagsSelector_SearchIcon" />
        <input type="text" class="TagsSelector_Input" placeholder="Add/filter tags">
      </div>
      <ul class="TagsSelector_List">
        <li
          v-for="tag in tags"
          @click="tag.isSelected = !tag.isSelected"
          :key="tag.id"
          class="TagsSelector_ListItem"
        >
          <span class="TagsSelector_Tag">{{ tag.name }}</span>
          <SvgIcon
            v-if="tag.isSelected"
            name="check-circle"
            class="TagsSelector_Selected"
          />
          <span
            v-else
            class="TagsSelector_Unselected"
          ></span>
        </li>
      </ul>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import TagManager from '@/store/modules/TagManager';
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

  private tags: { id: number, name: string, isSelected: boolean }[] = [];

  created() {
    this.tags = TagManager.tagState.map((tag: {id: number, name: string}) => ({
      id: tag.id,
      name: tag.name,
      // TODO: 選択済みのものをtrue
      isSelected: false,
    }));
  }

  private save(): void {
    // TODO: 選択済みの項目のみを抽出
    // TODO: 保存処理
    this.pageLayer.pop();
  }
}
</script>

<style lang="scss" scoped>
.TagsSelector {
  &_Inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &_Header {
    margin-bottom: 15px;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_List {
    flex: 1;
    overflow: auto;
  }

  &_ListItem {
    position: relative;
    display: flex;
    height: 48px;
    align-items: center;
    padding-left: 16px;
    border-bottom: 1px solid $color_lightGrayBorder;
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
