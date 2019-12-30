<template>
  <BottomSheet class="ProjectSelector">
    <BottomSheetHeader class="ProjectSelector_Header">
      <template v-slot:icon>
        <SvgIcon class="ProjectSelector_CloseIcon" name="close" />
      </template>
      <template v-slot:title>Projects</template>
    </BottomSheetHeader>
    <div class="ProjectSelector_Container">
      <SvgIcon class="ProjectSelector_SearchIcon" name="search" />
      <input type="text" class="ProjectSelector_Input" placeholder="Add/filter project">
    </div>
    <ul>
      <li class="ProjectSelector_ListItem">
        <span class="ProjectSelector_Project">No Project</span>
      </li>
      <li class="ProjectSelector_ListItem">
        <span
          class="ProjectSelector_Project"
          :style="{ borderColor: '#EA468D', color: '#EA468D' }"
        >ITR MP</span>
      </li>
      <li class="ProjectSelector_ListItem">
        <span
          class="ProjectSelector_Project"
          :style="{ borderColor: '#3750B5', color: '#3750B5' }"
        >LTP</span>
      </li>
      <li class="ProjectSelector_ListItem">
        <span
          class="ProjectSelector_Project"
          :style="{ borderColor: '#06AAF5', color: '#06AAF5' }"
        >LTSF</span>
      </li>
      <li class="ProjectSelector_ListItem">
        <!-- TODO: 選択時のみ背景色を設定 -->
        <span
          class="ProjectSelector_Project"
          :style="{
            borderColor: '#4BC800',
            color: '#4BC800',
            backgroundColor: ProjectSelector.getBackGroundColor('#4BC800')
          }"
        >LTSF LINE</span>
      </li>
    </ul>
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class ProjectSelector extends Vue {
  ProjectSelector = ProjectSelector;

  private static getBackGroundColor(hex: string): string {
    const pattern: RegExp = /^#([A-Z0-9]{1,2})([A-Z0-9]{1,2})([A-Z0-9]{1,2})$/;
    const matches: string[]|null = hex.match(pattern);
    if (hex.length % 3 !== 1 || matches === null) return '#000';

    const red: number = parseInt(matches[1], 16);
    const green: number = parseInt(matches[2], 16);
    const blue: number = parseInt(matches[3], 16);

    return `rgba(${red}, ${green}, ${blue}, 0.2)`;
  }
}
</script>

<style lang="scss" scoped>
.ProjectSelector {
  height: 100vh;

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
    border-bottom: 1px solid #C5C6C8;
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
    display: flex;
    align-items: center;
    color: #B2BCC1;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;
    padding: 6px;
    border-radius: 8px;

    &::before {
      display: inline-block;
      margin-right: 4px;
      border-radius: 50%;
      // border-colorを親(.Record_Project)から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
      content: '';
    }
  }
}
</style>
