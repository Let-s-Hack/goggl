<template>
  <BottomSheet class="TimerEditor">
    <BottomSheetHeader>
      <template v-slot:icon>
        <SvgIcon class="TimerEditor_CloseIcon" name="close" />
      </template>
      <template v-slot:title>Edit</template>
    </BottomSheetHeader>
    <ul>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: v-modelを使用、_isEmptyの出し分け -->
        <input type="text" class="TimerEditor_Description _isEmpty" value="Add description"/>
      </li>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: 選択済み時の出し分け -->
        <!-- <span
          class="TimerEditor_Project"
          :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
        >
          テスト
        </span> -->
        <span class="TimerEditor_EmptyItem">
          <SvgIcon class="TimerEditor_AddIcon" name="add" />Add project/task
        </span>
      </li>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: 選択済み時の出し分け -->
        <!-- <ul>
          <li class="TimerEditor_Tag">設計</li>
          <li class="TimerEditor_Tag">実装</li>
        </ul> -->
        <span class="TimerEditor_EmptyItem">
          <SvgIcon class="TimerEditor_AddIcon" name="add" />Add tags
        </span>
      </li>
      <li class="TimerEditor_InputLargeGroup"></li>
      <li class="TimerEditor_InputLargeGroup"></li>
      <li class="TimerEditor_InputLargeGroup"></li>
    </ul>
    <div class="TimerEditor_ButtonGroup">
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
  $padding: 15px;

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_InputGroup {
    height: 48px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $padding;
    box-sizing: border-box;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &:not(:last-child) {
      border-bottom: 1px solid #EEE;
    }
  }

  &_InputLargeGroup{
    @extend .TimerEditor_InputGroup;
    height: 56px;
  }

  input {
    caret-color: #6FC53A;
  }

  &_Description {
    width: 100%;
    height: 100%;

    &._isEmpty {
      color: #CECECE;
    }
  }

  &_Project {
    display: flex;
    align-items: center;
    margin-top: auto;
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

  &_AddIcon {
    width: 10px;
    height: 10px;
    margin-right: 4px;
    fill: #6FC53A;
  }

  &_ButtonGroup {
    display: flex;
    justify-content: space-around;
    padding: 10px $padding 16px $padding;
  }

  &_DeleteButton {
    position: relative;
    width: 110px;
    height: 40px;
    border-radius: 8px;
    background-color: #D1D1D6;
    color: #FFF;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &:active::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(#D1D1D6, 0.75);
      border-radius: inherit;
      content: '';
    }
  }

  &_ConfirmButton {
    position: relative;
    width: 206px;
    height: 40px;
    border-radius: 8px;
    background-color: #34C759;
    color: #FFF;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &:active::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(#34C759, 0.75);
      border-radius: inherit;
      content: '';
    }
  }
}
</style>
