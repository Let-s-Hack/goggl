<template>
  <div>
    <div class="RecordContainer">
      <RecordGroup
        v-for="recordGroup in getRecordGroupList"
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
import { ITimerState } from '@/store/types';
import RecordManager from '@/store/modules/RecordManager';
import RecordGroup from '~/organisms/RecordGroup.vue';

export interface IRecordGroup {
  date: string,
  records: ITimerState[],
}

@Component({
  components: {
    RecordGroup,
  },
})
export default class RecordContainer extends Vue {
  recordManager = RecordManager;

  created() {
    this.recordManager.fetch();
  }

  private get getRecordGroupList(): IRecordGroup[] {
    let nextRecordGroupList: (
      ITimerState[]
      | IRecordGroup[]
    ) = this.recordManager.recordState;

    nextRecordGroupList = orderBy(nextRecordGroupList, ['startDatetime'], ['desc']);
    nextRecordGroupList = reduce(nextRecordGroupList, (
      result: IRecordGroup[],
      value: ITimerState,
    ): IRecordGroup[] => {
      const date: string = moment(value.startDatetime!).format('YYYY-MM-DD');
      const dateIndex: number = result.findIndex((element: IRecordGroup) => (
        element.date === date
      ));

      if (dateIndex >= 0) {
        result[dateIndex].records.push(value);
        return result;
      }

      result.push({ date, records: [value] });
      return result;
    }, []);

    return nextRecordGroupList;
  }
}
</script>
