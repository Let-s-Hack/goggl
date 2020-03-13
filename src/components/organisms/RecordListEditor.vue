<template>
  <div class="RecordListEditor">
    <BackgroundOverlay @click.native="close()" />
    <BottomSheet class="TimerCreator_Inner">
      <BottomSheetHeader
        :back-button-callback="() => close()"
        class="RecordListEditor_Header"
      >
        <template v-slot:icon>
          <SvgIcon name="close" class="RecordListEditor_CloseIcon" />
        </template>
        <template v-slot:title>Editing {{ records.length }} time entries</template>
        <template v-slot:text>{{ totalDuration | toTime }}</template>
      </BottomSheetHeader>
      <ul>
        <li class="RecordListEditor_InputGroup">
          <input
            type="text"
            :class="['RecordListEditor_Description', { '_isEmpty': !tmpRecord.title }]"
            :value="tmpRecord.title || 'Add description'"
          />
        </li>
        <li
          @click="showProjectSelector()"
          class="RecordListEditor_InputGroup"
        >
          <span
            v-if="!projectManager.isNoProject(tmpRecord.projectId)"
            class="RecordListEditor_Project"
            :style="{
              borderColor: project.color,
              color: project.color
            }"
          >{{ project.name }}</span>
          <span
            v-else
            class="RecordListEditor_EmptyItem"
          >
            <SvgIcon name="add" class="RecordListEditor_AddIcon" />Add project/task
          </span>
        </li>
        <li
          @click="showTagsSelector()"
          class="RecordListEditor_InputGroup"
        >
          <ul v-if="recordManager.hasTags(tmpRecord.id)">
            <li
              v-for="tag in tags"
              :key="tag.id"
              class="RecordListEditor_Tag"
            >{{ tag.name }}</li>
          </ul>
          <span
            v-else
            class="RecordListEditor_EmptyItem"
          >
            <SvgIcon name="add" class="RecordListEditor_AddIcon" />Add tags
          </span>
        </li>
      </ul>
      <div class="RecordListEditor_ButtonGroup">
        <button
          @click="showDeleteButtonGroup()"
          class="RecordListEditor_DeleteButton"
        >Delete</button>
        <button
          @click="save()"
          class="RecordListEditor_ConfirmButton"
        >Confirm changes</button>
      </div>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { head } from 'lodash';
import moment from 'moment';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import {
  ITagState,
  ITimerState,
  IPageLayerComponentState,
  IProjectState,
} from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import ProjectManager from '@/store/modules/ProjectManager';
import RecordManager from '@/store/modules/RecordManager';
import TagManager from '@/store/modules/TagManager';
import TimeRecorder from '@/store/modules/TimeRecorder';
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
export default class RecordListEditor extends Vue {
  @Prop({ required: true }) records!: ITimerState[];

  private pageLayer = PageLayer;

  private projectManager = ProjectManager;

  private recordManager = RecordManager;

  private timeRecorder = TimeRecorder;

  // TODO: 変更監視（要削除）
  private tmp: boolean = true;

  private get project(): IProjectState | undefined {
    const projectId = this.timeRecorder.getState({ type: 'tmp', key: 'projectId' });

    return ProjectManager.getById(projectId);
  }

  private get record(): ITimerState | undefined {
    return head(this.records);
  }

  private get tags(): ITagState | undefined {
    const tagIds = this.timeRecorder.getState({ type: 'tmp', key: 'tagIds' });

    return TagManager.getByIds(tagIds);
  }

  private get totalDuration(): number {
    return this.recordManager.calcTotalDuration(this.records);
  }

  private get tmpRecord(): ITimerState {
    return this.timeRecorder.tmpState;
  }

  created() {
    if (typeof this.record !== 'undefined') {
      this.timeRecorder.setStates({ type: 'tmp', values: this.record });
    }
  }

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
.RecordListEditor {
  $padding: 16px;

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
      border-top: 1px solid $color_lightGrayBorder;
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
    @extend .RecordListEditor_Project;
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
