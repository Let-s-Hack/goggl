<template>
  <div>
    <div class="RecordContainer">
      <RecordGroup
        v-for="recordGroup in recordGroups"
        :key="recordGroup.date"
        :record-group="recordGroup"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  findLastIndex,
  forEach,
  orderBy,
} from 'lodash';
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { IRecordGroup } from '~/types';
import { ITimerState } from '@/store/types';
import RecordManager from '@/store/modules/RecordManager';
import RecordGroup from '~/organisms/RecordGroup.vue';

@Component({
  components: {
    RecordGroup,
  },
})
export default class RecordContainer extends Vue {
  private recordManager = RecordManager;

  private get recordGroups(): IRecordGroup[] {
    const orderedRecords: ITimerState[] = orderBy(this.recordManager.recordState, ['startDatetime'], ['desc']);
    const recordGroups: IRecordGroup[] = RecordContainer.groupByDate(orderedRecords);

    return recordGroups;
  }

  private static groupByDate(records: ITimerState[]): IRecordGroup[] {
    const recordGroups: IRecordGroup[] = [];

    forEach(records, (record: ITimerState) => {
      if (record.startDatetime === null) return;

      const date: string = moment(record.startDatetime).format('YYYY-MM-DD');
      const sameDateIndex: number = findLastIndex(recordGroups, { date });

      if (sameDateIndex >= 0) {
        recordGroups[sameDateIndex].records.push(record);
        return;
      }

      recordGroups.push({ date, records: [record] });
    });

    return recordGroups;
  }
}
</script>
