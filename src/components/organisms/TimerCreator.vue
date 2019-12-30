<template>
  <BottomSheet class="TimerCreator">
    <div class="TimerCreator_Header">
      <button class="TimerCreator_HeaderBackButton">
        <SvgIcon name="close" class="TimerCreator_CloseIcon" />
      </button>
      <p class="TimerCreator_HeaderTimeGroup">
        <SvgIcon name="timer" class="TimerCreator_TimerIcon" />
        <span class="TimerCreator_HeaderTime">0:32:10</span>
      </p>
    </div>
    <div class="TimerCreator_Input">
      <input type="text">
    </div>
    <!-- TODO: Search Projects をクリックしたときにプロジェクト選択プルダウンを出す -->
    <!-- TODO: Search Tags をクリックしたときにタグ選択プルダウンを出す -->
    <!-- <ul class="TimerCreator_SearchList">
      <li class="TimerCreator_SearchListItem">
        <strong>@</strong>Search Projects
      </li>
      <li class="TimerCreator_SearchListItem">
        <strong>#</strong>Search Tags
      </li>
    </ul> -->
    <!-- TODO: アイコンのアクティブクラスの出し分け -->
    <ul class="TimerCreator_ActionList">
      <li>
        <button class="TimerCreator_ActionButton _isActive">
          <SvgIcon name="folder" class="TimerCreator_ActionIcon _folder" />
        </button>
      </li>
      <li>
        <button class="TimerCreator_ActionButton">
          <SvgIcon name="tag" class="TimerCreator_ActionIcon _tag" />
        </button>
      </li>
      <li>
        <button class="TimerCreator_ActionButton">
          <SvgIcon name="calendar" class="TimerCreator_ActionIcon _calendar" />
        </button>
      </li>
      <li>
        <button class="TimerCreator_ActionButton">
          <SvgIcon name="time" class="TimerCreator_ActionIcon _time" />
        </button>
      </li>
    </ul>
    <ProjectSelector />
    <TagsSelector />
    <DurationSelector />
    <StartDateSelector />
    <DiscardButtonGroup />
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';
import DiscardButtonGroup from '~/molecules/DiscardButtonGroup.vue';
import ProjectSelector from '~/organisms/ProjectSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';
import DurationSelector from '~/organisms/DurationSelector.vue';
import StartDateSelector from '~/organisms/StartDateSelector.vue';

@Component({
  components: {
    BottomSheet,
    BottomSheetHeader,
    DiscardButtonGroup,
    ProjectSelector,
    TagsSelector,
    DurationSelector,
    StartDateSelector,
  },
})
export default class TimerCreator extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerCreator {
  &_Header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    box-sizing: border-box;
  }

  &_HeaderBackButton {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 12px;
    margin: auto -10px auto 6px;
    padding: 10px;
    box-sizing: content-box;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_HeaderTimeGroup {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    margin: 0 auto;
    padding: 0 10px;
    background: #FAFAFC;
    border-radius: 14px;
  }

  &_TimerIcon {
    width: 14px;
    fill: #B5BCC0;
  }

  &_HeaderTime {
    margin-left: 6px;
    font-size: 1.4rem;
    letter-spacing: 0.07rem;
  }

  &_SearchList {
    margin-top: 64px;
  }

  &_SearchListItem {
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    font-size: 1.3rem;
    letter-spacing: 0.045rem;
    color: #CFCFCF;
    border-bottom: 1px solid #C6C6C8;

    &:active {
      background: #D9D9D9;
    }

    > strong {
      margin-right: 4px;
      font-size: 1.8rem;
      font-weight: 500;
      color: #B5BCC0;
    }
  }

  &_ActionList {
    display: flex;
    line-height: 48px;
    border-top: 1px solid #C6C6C8;
    padding-left: 2px;
  }

  &_ActionButton {
    height: 100%;
    padding: 0 14px;

    &:active {
      > .TimerCreator_ActionIcon {
        fill: #606467;
      }
    }

    &._isActive {
      > .TimerCreator_ActionIcon {
        fill: #4CD964;
      }

      &:active {
        > .TimerCreator_ActionIcon {
          fill: #606467;
        }
      }
    }
  }

  &_ActionIcon {
    fill: #B5BCC0;

    &._folder {
      width: 15px;
    }

    &._tag {
      width: 12px;
    }

    &._calendar {
      width: 14px;
    }

    &._time {
      width: 14px;
    }
  }
}
</style>
