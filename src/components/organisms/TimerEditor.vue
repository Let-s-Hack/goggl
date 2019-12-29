<template>
  <BottomSheet class="TimerEditor">
    <BottomSheetHeader class="TimerEditor_Header">
      <template v-slot:icon>
        <SvgIcon class="TimerEditor_CloseIcon" name="close" />
      </template>
      <template v-slot:title>Edit</template>
    </BottomSheetHeader>
    <ul>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: v-modelを使用、_isEmptyの出し分け -->
        <input type="text" class="TimerEditor_Description" value="goggl | 静的コーディング"/>
        <!--
        <input
          type="text"
          class="TimerEditor_Description _isEmpty"
          value="Add description"
        />
        -->
      </li>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: 選択済み時の出し分け -->
        <span
          class="TimerEditor_Project"
          :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
        >
          テスト
        </span>
        <!-- <span class="TimerEditor_EmptyItem">
          <SvgIcon class="TimerEditor_AddIcon" name="add" />Add project/task
        </span> -->
      </li>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: 選択済み時の出し分け -->
        <ul>
          <li class="TimerEditor_Tag">設計</li>
          <li class="TimerEditor_Tag">実装</li>
        </ul>
        <!-- <span class="TimerEditor_EmptyItem">
          <SvgIcon class="TimerEditor_AddIcon" name="add" />Add tags
        </span> -->
      </li>
      <li class="TimerEditor_InputGroup _time">
        <div class="TimerEditor_TimeItem">
          <SvgIcon class="TimerEditor_Icon" name="time" />
          <div class="TimerEditor_LabelGroup">
            <span class="TimerEditor_LabelText">05:06 PM</span>
            <span class="TimerEditor_LabelSubText">Start</span>
          </div>
        </div>
        <div class="TimerEditor_TimeItem">
          <div class="TimerEditor_LabelGroup">
            <span class="TimerEditor_LabelText">09:06 PM</span>
            <!-- TODO: 出し分け -->
            <!-- <span class="TimerEditor_LabelText _isStop">Stop</span> -->
            <span class="TimerEditor_LabelSubText">End</span>
          </div>
        </div>
      </li>
      <li class="TimerEditor_InputGroup _large">
        <SvgIcon class="TimerEditor_Icon" name="timer" />
        <div class="TimerEditor_LabelGroup">
          <span class="TimerEditor_LabelText">0:00:23</span>
          <span class="TimerEditor_LabelSubText">Duration</span>
        </div>
      </li>
      <li class="TimerEditor_InputGroup _large">
        <SvgIcon class="TimerEditor_Icon" name="calendar" />
        <div class="TimerEditor_LabelGroup">
          <span class="TimerEditor_LabelText">12/29</span>
          <span class="TimerEditor_LabelSubText">Start date</span>
        </div>
      </li>
    </ul>
    <div class="TimerEditor_ButtonGroup _large">
      <button class="TimerEditor_DeleteButton">Delete</button>
      <button class="TimerEditor_ConfirmButton">Confirm changes</button>
    </div>
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
export default class TimerEditor extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerEditor {
  height: 430px;
  $padding: 16px;

  &_Header {
    margin-bottom: 15px;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_InputGroup {
    height: 48px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 $padding;
    box-sizing: border-box;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    & + & {
      border-top: 1px solid #EEE;
    }
  }

  &_InputGroup._large {
    height: 56px;
  }

  &_InputGroup._time {
    padding: 0;
  }

  &_TimeItem {
    display: inherit;
    flex: 50%;
    height: 100%;
    padding: 0 $padding;
    box-sizing: border-box;
    align-items: center;

    & + & {
      border-left: 1px solid #EEE;
    }
  }

  &_Description {
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    caret-color: #6FC53A;

    &._isEmpty {
      color: #CECECE;
    }
  }

  &_Project {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;

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

  &_Tag {
    display: inline-block;
    margin-top: auto;
    padding: 6px;
    color: #A7A7AA;
    font-size: 1.2rem;
    border: 1px solid #DCDCDD;
    border-radius: 8px;
  }

  &_Tag + &_Tag {
    margin-left: 6px;
  }

  &_EmptyItem {
    @extend .TimerEditor_Project;
    color: #8A8A8D;

    &::before {
      display: none;
    }
  }

  &_Icon {
    width: 15px;
    height: 15px;
    margin-right: 12px;
    fill: #B5BCC0;
  }

  &_LabelGroup {
    display: flex;
    flex-direction: column;
  }

  &_LabelText {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &._isStop {
      color: #69E085;
    }
  }

  &_LabelSubText {
    margin-top: 6px;
    font-size: 1.2rem;
    color: #8A8A8E;
  }

  &_AddIcon {
    width: 10px;
    height: 10px;
    margin-right: 6px;
    fill: #6FC53A;
  }

  &_ButtonGroup {
    display: flex;
    justify-content: space-between;
    padding: 10px $padding 16px $padding;
  }

  &_DeleteButton {
    position: relative;
    width: 110px;
    border-radius: 8px;
    background-color: #D1D1D6;
    color: #FFF;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    line-height: 40px;

    &:active {
      color: rgba(#FFF, 0.3);
    }
  }

  &_ConfirmButton {
    position: relative;
    flex: 1;
    margin-left: 24px;
    border-radius: 8px;
    background-color: #34C759;
    color: #FFF;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    line-height: 40px;

    &:active {
      color: rgba(#FFF, 0.3);
    }
  }
}
</style>
