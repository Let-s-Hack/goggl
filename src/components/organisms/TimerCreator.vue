<template>
  <div class="TimerCreator">
    <BackgroundOverlay />
    <BottomSheet class="TimerCreator_Inner">
      <div class="TimerCreator_Header">
        <button @click="pageLayer.pop()" class="TimerCreator_HeaderBackButton">
          <SvgIcon name="close" class="TimerCreator_CloseIcon" />
        </button>
        <div class="TimerCreator_HeaderTimeGroup">
          <SvgIcon name="timer" class="TimerCreator_TimerIcon" />
          <span class="TimerCreator_HeaderTime">0:32:10</span>
        </div>
      </div>
      <div class="TimerCreator_Content">
        <!-- TODO: 選択されたProject, Tagを表示 -->
        <div class="TimerCreator_SelectedGroup">
          <span
            :style="{ borderColor: '#EA468D', color: '#EA468D', background: '#EA468D' }"
            class="TimerCreator_SelectedProject"
          >goggl</span>
          <span class="TimerCreator_SelectedTag">設計</span>
          <span class="TimerCreator_SelectedTag">実装</span>
        </div>
        <ul class="TimerCreator_SearchList">
          <!-- TODO: クリックしたときに ProjectSelector を表示する -->
          <li class="TimerCreator_SearchListItem">
            <strong>@</strong>Search Projects
          </li>
          <!-- TODO: クリックしたときに TagsSelector を表示する -->
          <li class="TimerCreator_SearchListItem">
            <strong>#</strong>Search Tags
          </li>
        </ul>
      </div>
      <!-- TODO: ボタンのアクティブクラスの出し分け -->
      <ul class="TimerCreator_ActionList">
        <li class="TimerCreator_ActionListItem">
          <button class="TimerCreator_ActionButton _isActive">
            <SvgIcon name="folder" class="TimerCreator_ActionIcon _folder" />
          </button>
        </li>
        <li class="TimerCreator_ActionListItem">
          <button class="TimerCreator_ActionButton">
            <SvgIcon name="tag" class="TimerCreator_ActionIcon _tag" />
          </button>
        </li>
        <li class="TimerCreator_ActionListItem">
          <button class="TimerCreator_ActionButton">
            <SvgIcon name="calendar" class="TimerCreator_ActionIcon _calendar" />
          </button>
        </li>
        <li class="TimerCreator_ActionListItem">
          <button class="TimerCreator_ActionButton">
            <SvgIcon name="time" class="TimerCreator_ActionIcon _time" />
          </button>
        </li>
        <li class="TimerCreator_ActionListItem">
          <button @click="save()" class="TimerCreator_ActionButton">
            <SvgIcon name="check-circle" class="TimerCreator_ActionIcon _checkCircle" />
          </button>
        </li>
      </ul>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
import { ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import TimeRecorder from '@/store/modules/TimeRecorder';
import BackgroundOverlay from '~/atoms/BackgroundOverlay.vue';
import BottomSheet from '~/atoms/BottomSheet.vue';
import ProjectSelector from '~/organisms/ProjectSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';
import DurationSelector from '~/organisms/DurationSelector.vue';
import StartDateSelector from '~/organisms/StartDateSelector.vue';

@Component({
  components: {
    BackgroundOverlay,
    BottomSheet,
    ProjectSelector,
    TagsSelector,
    DurationSelector,
    StartDateSelector,
  },
})
export default class TimerCreator extends Vue {
  private timerState: ITimerState = {
    startDatetime: null,
    projectId: null,
    tags: [],
  };

  created() {
    this.timerState.startDatetime = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  private save(): void {
    TimeRecorder.activate(this.timerState);
    PageLayer.pop();
  }
}
</script>

<style lang="scss" scoped>
.TimerCreator {
  &_Inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

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

  &_Content {
    flex: 1;
    overflow-y: auto;
  }

  &_SelectedGroup {
    height: 64px;
    line-height: 24px;
    margin-top: 8px;
    padding: 0 16px 0 24px;
    box-sizing: border-box;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    overflow-y: auto;
  }

  &_SelectedProject {
    position: relative;
    display: inline-block;
    margin: 0 8px 4px 0;
    padding: 0 6px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    box-shadow: 0 0 0 1.2rem rgba(#FFF, 0.8) inset;

    &::before {
      display: inline-block;
      margin-right: 6px;
      border-radius: 50%;
      // border-colorを親から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
      content: '';
    }
  }

  &_SelectedTag {
    display: inline-block;
    margin: 0 8px 4px 0;
    padding: 0 6px;
    box-sizing: border-box;
    color: #A7A7AA;
    font-size: 1.1rem;
    border: 1px solid #DCDCDD;
    border-radius: 8px;
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
    padding-left: 2px;
    border-top: 1px solid #C6C6C8;
    background: #FFF;
  }

  &_ActionListItem:last-child {
    margin-left: auto;

    .TimerCreator_ActionButton {
      position: relative;
      padding: 0 12px;

      &:active::before {
        position: absolute;
        display: block;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(#000, 0.47);
        content: '';
      }
    }
  }

  &_ActionButton {
    height: 100%;
    padding: 0 14px;

    &:active {
      > .TimerCreator_ActionIcon:not(._checkCircle) {
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

    &._calendar, &._time {
      width: 14px;
    }

    &._checkCircle {
      width: 28px;
      fill: #4CD964;
    }
  }
}
</style>
