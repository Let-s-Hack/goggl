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
      <template v-for="recordGroup in nextRecordGroups">
        <RecordList
          v-if="recordGroup.type === recordType.recordList"
          :key="recordGroup.records[0].id"
          :records="recordGroup.records"
          class="RecordGroup_Item"
        />
        <Record
          v-else-if="recordGroup.type === recordType.record"
          @click.native="showTimerEditor()"
          :key="recordGroup.record.id"
          :record="recordGroup.record"
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
  isMatch,
  orderBy,
  reduce,
} from 'lodash';
import moment, { Moment } from 'moment';
import {
  Component,
  Prop,
  Vue,
  Watch,
} from 'vue-property-decorator';
import { IRecordGroup } from '~/types';
import { ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import RecordManager from '@/store/modules/RecordManager';
import Record from '~/atoms/Record.vue';
import RecordList from '~/molecules/RecordList.vue';
import RecordGroupHeader from '~/molecules/RecordGroupHeader.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';

interface IRecordTypeGroup {
  type: string,
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

  private recordTypeGroups: IRecordTypeGroup[] = [];

  private recordType: {
    [key: string]: 'RecordComponent' | 'RecordListComponent'
  } = {
    record: 'RecordComponent',
    recordList: 'RecordListComponent',
  };

  @Watch('isLoading')
  private buildRecordGroups(): void {
    const orderedRecords: ITimerState[] = orderBy(this.recordGroup.records, ['startDatetime'], ['desc']);
    const groupedRecords: ITimerState[][] = RecordGroup.groupBySameRecord(orderedRecords);
    this.attachRecordType(groupedRecords);
  }

  private get totalSeconds(): number {
    const totalSeconds: number = reduce(
      this.recordGroup.records,
      (sum: number, record: ITimerState) => sum + this.recordManager.getDurationById(record.id),
      0,
    );

    return totalSeconds;
  }

  private attachRecordType(recordGroups: ITimerState[][]): void {
    const recordTypeGroups: IRecordTypeGroup[] = [];

    forEach(recordGroups, (records: ITimerState[]) => {
      if (records.length >= 2) {
        recordTypeGroups.push({ type: this.recordType.recordList, records });
        return;
      }

      recordTypeGroups.push({ type: this.recordType.record, record: records[0] });
    });

    this.recordTypeGroups = recordTypeGroups;
  }

  private getPassedDays(): number {
    const now: Moment = moment();
    const recordDate: Moment = moment(this.recordGroup.date);
    const passedDays: number = now.diff(recordDate, 'days');

    return passedDays;
  }

  private showTimerEditor(): void {
    this.pageLayer.push({ component: TimerEditor });
  }

  private static isSameRecord(record: ITimerState, compareRecord: ITimerState): boolean {
    return isMatch(record, {
      title: compareRecord.title,
      projectId: compareRecord.projectId,
      tagIds: compareRecord.tagIds,
    });
  }

  private static groupBySameRecord(records: ITimerState[]): ITimerState[][] {
    const groupedRecords: ITimerState[][] = [];

    forEach(records, (record: ITimerState): void => {
      const sameRecordIndex: number = findIndex(groupedRecords, (_records: ITimerState[]) => {
        const compareRecord = _records[0];
        return RecordGroup.isSameRecord(record, compareRecord);
      });

      if (sameRecordIndex >= 0) {
        groupedRecords[sameRecordIndex].push(record);
        return;
      }

      groupedRecords.push([record]);
    });

    return groupedRecords;
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
