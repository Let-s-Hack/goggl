<template>
  <div class="TimerEditor">
    <BackgroundOverlay @click.native="close()" />
    <BottomSheet>
      <BottomSheetHeader
        :back-button-callback="() => close()"
        class="TimerEditor_Header"
      >
        <template v-slot:icon>
          <SvgIcon name="close" class="TimerEditor_CloseIcon" />
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
        <li
          @click="showProjectSelector()"
          class="TimerEditor_InputGroup"
        >
          <!-- TODO: 選択済み時の出し分け -->
          <span
            v-if="true"
            class="TimerEditor_Project"
            :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
          >
            テスト
          </span>
          <span
            v-else
            class="TimerEditor_EmptyItem"
          >
            <SvgIcon name="add" class="TimerEditor_AddIcon" />Add project/task
          </span>
        </li>
        <li
          @click="showTagsSelector()"
          class="TimerEditor_InputGroup"
        >
          <!-- TODO: 選択済み時の出し分け -->
          <ul v-if="true">
            <li class="TimerEditor_Tag">設計</li>
            <li class="TimerEditor_Tag">実装</li>
          </ul>
          <span
            v-else
            class="TimerEditor_EmptyItem"
          >
            <SvgIcon name="add" class="TimerEditor_AddIcon" />Add tags
          </span>
        </li>
        <li class="TimerEditor_InputGroup _time">
          <div class="TimerEditor_TimeItem">
            <SvgIcon name="time" class="TimerEditor_Icon" />
            <div class="TimerEditor_LabelGroup">
              <span class="TimerEditor_LabelText">05:06 PM</span>
              <span class="TimerEditor_LabelSubText">Start</span>
            </div>
          </div>
          <div class="TimerEditor_TimeItem">
            <div class="TimerEditor_LabelGroup">
              <span
                v-if="true"
                class="TimerEditor_LabelText"
              >09:06 PM</span>
              <span
                v-else
                class="TimerEditor_LabelText _isStop"
              >Stop</span>
              <span class="TimerEditor_LabelSubText">End</span>
            </div>
          </div>
        </li>
        <li class="TimerEditor_InputGroup _large">
          <SvgIcon name="timer" class="TimerEditor_Icon" />
          <div class="TimerEditor_LabelGroup">
            <span class="TimerEditor_LabelText">0:00:23</span>
            <span class="TimerEditor_LabelSubText">Duration</span>
          </div>
        </li>
        <li class="TimerEditor_InputGroup _large">
          <SvgIcon name="calendar" class="TimerEditor_Icon" />
          <div class="TimerEditor_LabelGroup">
            <span class="TimerEditor_LabelText">12/29</span>
            <span class="TimerEditor_LabelSubText">Start date</span>
          </div>
          <label class="TimerEditor_InputGroupInner">
            <input type="date" class="TimerEditor_Input">
          </label>
        </li>
      </ul>
      <div class="TimerEditor_ButtonGroup _large">
        <button
          @click="showDeleteButtonGroup()"
          class="TimerEditor_DeleteButton"
        >Delete</button>
        <button
          @click="save()"
          class="TimerEditor_ConfirmButton"
        >Confirm changes</button>
      </div>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import BackgroundOverlay from '~/atoms/BackgroundOverlay.vue';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';
import DeleteButtonGroup from '~/organisms/DeleteButtonGroup.vue';
import DiscardButtonGroup from '~/organisms/DiscardButtonGroup.vue';
import ProjectSelector from '~/organisms/ProjectSelector.vue';
import TagsSelector from '~/organisms/TagsSelector.vue';

@Component({
  components: {
    BackgroundOverlay,
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class TimerEditor extends Vue {
  private pageLayer = PageLayer;

  // TODO: 変更監視（要削除）
  private tmp: boolean = true;

  private close(): void {
    // TODO: 変更監視
    if (this.tmp) {
      this.pageLayer.push({ component: DiscardButtonGroup });
      return;
    }

    this.pageLayer.pop();
  }

  private save(): void {
    // TODO: 保存処理
    this.pageLayer.pop();
  }

  private delete(): void {
    // TODO: 削除処理
    this.pageLayer.clear();
  }

  private showProjectSelector(): void {
    this.pageLayer.push({ component: ProjectSelector });
  }

  private showTagsSelector(): void {
    this.pageLayer.push({ component: TagsSelector });
  }

  private showDeleteButtonGroup(): void {
    this.pageLayer.push({
      component: DeleteButtonGroup,
      attributes: { applyButtonCallback: () => this.delete() },
    });
  }
}
</script>

<style lang="scss" scoped>
.TimerEditor {
  $padding: 16px;

  &_Header {
    margin-bottom: 15px;
  }

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_InputGroup {
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 $padding;
    box-sizing: border-box;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    & + & {
      border-top: 1px solid $color_lightGrayBorder;
    }
  }

  &_InputGroup._large {
    height: 56px;
  }

  &_InputGroup._time {
    padding: 0;
  }

  &_InputGroupInner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &_Input {
    position: absolute;
    transform: scale(0);
  }

  &_TimeItem {
    display: inherit;
    flex: 50%;
    height: 100%;
    padding: 0 $padding;
    box-sizing: border-box;
    align-items: center;

    & + & {
      border-left: 1px solid $color_lightGrayBorder;
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
      // border-colorを親から継承するため、ショートハンドプロパティは使いません
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
