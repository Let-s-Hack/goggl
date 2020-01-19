<template>
  <li class="RecordList">
    <div @click="showRecordListEditor()" class="RecordList_Summary">
      <p class="RecordList_SummaryCount _isActive">{{ records.length }}</p>
      <div class="RecordList_SummaryTitleGroup">
        <h3
          v-if="records[0].title"
          class="RecordList_SummaryTitle"
        >{{ records[0].title }}</h3>
        <h3
          v-else
          class="RecordList_SummaryTitle _isEmpty"
        >Add description</h3>
        <span
          v-if="getProject"
          class="RecordList_SummaryProject"
          :style="{
            borderColor: getProject.color,
            color: getProject.color
          }"
        >{{ getProject.name }}</span>
      </div>
      <div
        v-if="records[0].tagIds.length > 0"
        class="RecordList_SummaryTag"
      >
        <SvgIcon name="tag" class="RecordList_IconTag" />
      </div>
      <div class="RecordList_SummaryTimeGroup">
        <span class="RecordList_SummaryTime">{{ getTotal | displayTotal() }}</span>
        <SvgIcon name="triangle" class="RecordList_IconStart" />
      </div>
    </div>
    <ul>
      <RecordListItem
        v-for="record in records"
        :key="record.id"
        :record="record"
        @click.native="showTimerEditor()"
        class="RecordList_Record"
      />
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import moment, { Moment } from 'moment';
import { IProjectState, ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import ProjectManager from '@/store/modules/ProjectManager';
import RecordListItem from '~/atoms/RecordListItem.vue';
import RecordListEditor from '~/organisms/RecordListEditor.vue';
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

  private get getProject(): IProjectState | undefined {
    return this.projectManager.getById(this.records[0].projectId);
  }

  private get getTotal(): number {
    let total = 0;

    this.records.forEach((record: ITimerState): void => {
      if (record.startDatetime === null || record.endDatetime === null) return;

      const start: Moment = moment(record.startDatetime);
      const end: Moment = moment(record.endDatetime);

      // ミリ秒から秒にして合計値に追加する
      total += Math.floor(end.diff(start) / 1000);
    });

    return total;
  }

  private showRecordListEditor(): void {
    this.pageLayer.push({ component: RecordListEditor });
  }

  private showTimerEditor(): void {
    this.pageLayer.push({ component: TimerEditor });
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
    margin-right: 32px;
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
    margin-right: 16px;
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

  &_SummaryTimeGroup {
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
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;

    &::before {
      display: inline-block;
      margin-right: 4px;
      border-radius: 50%;
      // border-colorを親(.RecordList_SummaryProject)から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
      content: '';
    }
  }

  &_SummaryTime {
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
