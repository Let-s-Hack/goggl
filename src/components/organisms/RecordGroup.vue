<template>
  <div class="RecordGroup">
    <RecordGroupHeader class="RecordGroup_Header">
      <template v-slot:date>
        <template v-if="getPassedDays() > 1">
          {{ recordGroup.date | format('ddd, DD MMM') }}
        </template>
        <template v-else-if="getPassedDays() === 1">
          Yesterday
        </template>
        <template v-else-if="getPassedDays() === 0">
          Today
        </template>
      </template>
      <template v-slot:total>{{ totalSeconds | toTime }}</template>
    </RecordGroupHeader>
    <ul>
      <template v-for="(recordList, index) in recordLists">
        <RecordList
          v-if="recordList.type === recordType.recordList"
          :key="recordList.records[0].id || index"
          :records="recordList.records"
          class="RecordGroup_Item"
        />
        <Record
          v-else-if="recordList.type === recordType.record"
          @click.native="showTimerEditor()"
          :key="recordList.record.id || index"
          :record="recordList.record"
          class="RecordGroup_Item"
        />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  findIndex,
  forEach,
  orderBy,
} from 'lodash';
import moment, { Moment } from 'moment';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import { IRecordGroup } from '~/types';
import { ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import RecordManager from '@/store/modules/RecordManager';
import Record from '~/atoms/Record.vue';
import RecordList from '~/molecules/RecordList.vue';
import RecordGroupHeader from '~/molecules/RecordGroupHeader.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';

interface IRecordList {
  type: 'record' | 'recordList',
  record?: ITimerState,
  records?: ITimerState[],
}

@Component({
  components: {
    Record,
    RecordList,
    RecordGroupHeader,
  },
})
export default class RecordGroup extends Vue {
  @Prop({ required: true }) recordGroup!: IRecordGroup;

  private pageLayer = PageLayer;

  private recordManager = RecordManager;

  private recordType: { [key: string]: 'record' | 'recordList' } = {
    record: 'record',
    recordList: 'recordList',
  };

  private getPassedDays(): number {
    const now: Moment = moment();
    const recordDate: Moment = moment(this.recordGroup.date);
    const diffDays: number = now.diff(recordDate, 'days');

    return diffDays;
  }

  private showTimerEditor(): void {
    this.pageLayer.push({ component: TimerEditor });
  }

  private get recordLists(): IRecordList[] {
    const orderedRecords: ITimerState[] = orderBy(this.recordGroup.records, ['startDatetime'], ['desc']);
    const groupedRecords: ITimerState[][] = RecordGroup.groupBySameRecord(orderedRecords);
    const recordLists: IRecordList[] = this.sortByRecordType(groupedRecords);

    return recordLists;
  }

  private get totalSeconds(): number {
    let totalSeconds = 0;

    forEach(this.recordGroup.records, (record: ITimerState): void => {
      if (record.id === null) return;
      totalSeconds += this.recordManager.getDurationById(record.id);
    });

    return totalSeconds;
  }

  private static groupBySameRecord(records: ITimerState[]): ITimerState[][] {
    const recordLists: ITimerState[][] = [];

    forEach(records, (record: ITimerState): void => {
      const sameRecordIndex: number = findIndex(recordLists, [0, {
        title: record.title,
        projectId: record.projectId,
        tagIds: record.tagIds,
      }]);

      if (sameRecordIndex >= 0) {
        recordLists[sameRecordIndex].push(record);
        return;
      }

      recordLists.push([record]);
    });

    return recordLists;
  }

  private sortByRecordType(recordLists: ITimerState[][]): IRecordList[] {
    const sortedRecordLists: IRecordList[] = [];

    forEach(recordLists, (records: ITimerState[]) => {
      if (records.length >= 2) {
        sortedRecordLists.push({ type: this.recordType.recordList, records });
        return;
      }

      sortedRecordLists.push({ type: this.recordType.record, record: records[0] });
    });

    return sortedRecordLists;
  }
}
</script>

<style lang="scss" scoped>
.RecordGroup {
  & + & {
    .RecordGroup_Header {
      top: -22px;
      padding-top: 44px;
    }
  }

  &_Header {
    position: sticky;
    top: 0;
    z-index: $zIndex_recordGroupHeader;
    padding-top: 20px;
    padding-bottom: 8px;
    background: $color_timerBackground;
    border-bottom: 1px solid $color_recordBorder;
  }

  &_Item {
    & + & {
      border-top: 1px solid $color_recordBorder;
    }

    &:last-child {
      border-bottom: 1px solid $color_recordBorder;
    }
  }
}
</style>
