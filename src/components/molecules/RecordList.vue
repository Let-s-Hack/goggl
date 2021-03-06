<template>
  <li class="RecordList">
    <div class="RecordList_Summary">
      <p
        @click.stop.prevent="isSelected = !isSelected"
        :class="['RecordList_SummaryCount', { '_isActive': isSelected }]"
      >{{ records.length }}</p>
      <div class="RecordList_SummaryTitleGroup">
        <h3
          :class="['RecordList_SummaryTitle', { '_isEmpty': !record.title }]"
        >{{ record.title || 'Add description' }}</h3>
        <span
          v-if="!projectManager.isNoProject(record.projectId)"
          class="RecordList_SummaryProject"
          :style="{
            borderColor: project.color,
            color: project.color
          }"
        >{{ project.name }}</span>
      </div>
      <div
        v-if="recordManager.hasTags(record.id)"
        class="RecordList_SummaryTag"
      >
        <SvgIcon name="tag" class="RecordList_IconTag" />
      </div>
      <div class="RecordList_SummaryDurationGroup">
        <span class="RecordList_SummaryDuration">{{ totalDuration | toTime }}</span>
        <SvgIcon name="triangle" class="RecordList_IconStart" />
      </div>
    </div>
    <ul v-if="isSelected">
      <RecordListItem
        v-for="_record in records"
        @click.native.stop.prevent="showTimerEditor(_record)"
        :key="_record.id"
        :record="_record"
        class="RecordList_Record"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { head } from 'lodash';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import {
  IProjectState,
  ITimerState,
} from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import ProjectManager from '@/store/modules/ProjectManager';
import RecordManager from '@/store/modules/RecordManager';
import RecordListItem from '~/atoms/RecordListItem.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';
@Component({
  components: {
    RecordListItem,
  },
})
export default class RecordList extends Vue {
  @Prop({ required: true }) records!: ITimerState[];

  private pageLayer = PageLayer;

  private projectManager = ProjectManager;

  private recordManager = RecordManager;

  private isSelected = false;

  private get project(): IProjectState | undefined {
    if (typeof this.record === 'undefined') return undefined;

    return ProjectManager.getById(this.record.projectId);
  }

  private get record(): ITimerState | undefined {
    return head(this.records);
  }

  private get totalDuration(): number {
    return this.recordManager.calcTotalDuration(this.records);
  }

  private showTimerEditor(record: ITimerState): void {
    this.pageLayer.push({
      component: TimerEditor,
      attributes: { record },
    });
  }
}
</script>

<style lang="scss" scoped>
.RecordList {
  &_Summary {
    $heightSize: 64px;
    display: flex;
    height: $heightSize;
    padding: 14px 16px;
    background: #FFF;
    box-sizing: border-box;

    &:active {
      background: #D9D9D9;

      .RecordList_SummaryCount {
        background: #D9D9D9;
      }

      .RecordList_SummaryTitleGroup::after {
        background: linear-gradient(to left, #D9D9D9, rgba(#D9D9D9, 0));
      }

      .RecordList_IconStart {
        fill: #BCBCBE;
      }
    }
  }

  &_SummaryCount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin: auto 32px auto 0;
    background: transparent;
    font-size: 1.6rem;
    box-sizing: border-box;
    border: 1px solid #C6C6C8;
    border-radius: 50%;
    color: #8A8A8E;

    &._isActive {
      background: #E5E5EC;
      border: none;
      color: #4ADA64;
    }
  }

  &_SummaryTitleGroup {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 16px -2px 0;
    overflow: hidden;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      width: 16px;
      height: 100%;
      background: linear-gradient(to left, #FFF, rgba(#FFF, 0));
      content: '';
    }
  }

  &_SummaryTag {
    flex: 0 1 auto;
    margin-right: 36px;
  }

  &_SummaryDurationGroup {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_SummaryTitle {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;

    &._isEmpty {
      color: #C7C7C9;
    }
  }

  &_SummaryProject {
    display: flex;
    align-items: center;
    margin-top: auto;
    padding-bottom: 2px;
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

  &_SummaryDuration {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  &_Record {
    border-top: 1px solid $color_recordBorder;
  }

  &_IconTag {
    width: 10px;
    fill: #B5BCC0;
  }

  &_IconStart {
    align-self: flex-end;
    width: 10px;
    margin-right: 12px;
    fill: #DCDCDD;
  }
}
</style>
