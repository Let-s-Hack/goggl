<template>
  <div class="ProjectSelector">
    <BackgroundOverlay @click.native="pageLayer.pop()" />
    <BottomSheet class="ProjectSelector_Inner">
      <BottomSheetHeader
        :back-button-callback="() => pageLayer.pop()"
        class="ProjectSelector_Header"
      >
        <template v-slot:icon>
          <SvgIcon name="close" class="ProjectSelector_CloseIcon" />
        </template>
        <template v-slot:title>Projects</template>
      </BottomSheetHeader>
      <div class="ProjectSelector_Container">
        <SvgIcon name="search" class="ProjectSelector_SearchIcon" />
        <input type="text" class="ProjectSelector_Input" placeholder="Add/filter project">
      </div>
      <ul class="ProjectSelector_List">
        <li
          v-for="project in projects"
          @click="save()"
          :key="project.id"
          class="ProjectSelector_ListItem"
        >
          <!-- TODO: 選択時のみ背景色を設定 -->
          <span
            :style="{ borderColor: project.color, color: project.color }"
            class="ProjectSelector_Project"
          >{{ project.name }}</span>
        </li>
      </ul>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import ProjectManager from '@/store/modules/ProjectManager';
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
export default class ProjectSelector extends Vue {
  private pageLayer = PageLayer;

  private projects = ProjectManager.projectState;

  private save(): void {
    // TODO: 保存処理
    this.pageLayer.pop();
  }
}
</script>

<style lang="scss" scoped>
.ProjectSelector {
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

  &_Container {
    display: flex;
    height: 48px;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid $color_lightGrayBorder;
  }

  &_List {
    flex: 1;
    overflow: auto;
  }

  &_ListItem {
    @extend .ProjectSelector_Container;
    overflow: hidden;

    &:active {
      background-color: #D9D9D9;

      .ProjectSelector_Project {
        box-shadow: 0 0 0 24px #D9D9D9 inset;

        &::before {
          border-color: #D9D9D9;
        }
      }
    }
  }

  &_SearchIcon {
    width: 10px;
    height: 10px;
    margin-right: 10px;
    fill: #C3C4C6;
  }

  &_Input {
    width: 100%;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    caret-color: #6FC53A;

    &::placeholder {
      color: #C3C4C6;
    }
  }

  &_Project {
    $fontSize: 1.3rem;
    display: flex;
    align-items: center;
    color: #B2BCC1;
    font-size: $fontSize;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;
    padding: 6px;
    border-radius: 8px;
    box-shadow: 0 0 0 $fontSize rgba(#FFF, 0.8) inset;

    &::before {
      display: inline-block;
      margin-right: 4px;
      border-radius: 50%;
      // border-colorを親から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
      content: '';
    }
  }
}
</style>
