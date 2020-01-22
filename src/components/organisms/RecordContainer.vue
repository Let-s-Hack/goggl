<template>
  <div>
    <div class="RecordContainer">
      <RecordGroup
        v-for="recordGroup in recordGroups"
        :key="recordGroup.date"
        :recordGroup="recordGroup"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { orderBy, reduce } from 'lodash';
import moment from 'moment';
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
    let nextRecordGroups: (
      ITimerState[] | IRecordGroup[]
    ) = this.recordManager.recordState;

    nextRecordGroups = orderBy(nextRecordGroups, ['startDatetime'], ['desc']);
    nextRecordGroups = RecordContainer.groupByDate(nextRecordGroups);

    return nextRecordGroups;
  }

  private static groupByDate(recordGroups: ITimerState[]): IRecordGroup[] {
    return reduce(recordGroups, (
      result: IRecordGroup[],
      value: ITimerState,
    ): IRecordGroup[] => {
      const date: string = moment(value.startDatetime!).format('YYYY-MM-DD');

      // 同じ日付のレコードを探して、配列番号を求める
      const targetIndex: number = result.findIndex((recordGroup: IRecordGroup) => (
        recordGroup.date === date
      ));

      if (targetIndex >= 0) {
        result[targetIndex].records.push(value);
        return result;
      }

      result.push({ date, records: [value] });
      return result;
    }, []);
  }
}
</script>
