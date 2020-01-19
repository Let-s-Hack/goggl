<template>
  <div class="RecordGroup">
    <RecordGroupHeader class="RecordGroup_Header">
      <template v-slot:date>{{ displayDate }}</template>
      <template v-slot:total>{{ getTotal | displayTotal() }}</template>
    </RecordGroupHeader>
    <ul
      v-for="records in getRecordGroup"
      :key="records[0].id"
    >
      <Record
        v-if="records.length === 1"
        @click.native="showTimerEditor()"
        :record="records[0]"
        class="RecordGroup_Item"
      />
      <RecordList
        v-else
        :records="records"
        class="RecordGroup_Item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { reduce, isEqual } from 'lodash';
import moment, { Moment } from 'moment';
import { ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import Record from '~/atoms/Record.vue';
import { IRecordGroup } from '~/organisms/RecordContainer.vue';
import RecordList from '~/molecules/RecordList.vue';
import RecordGroupHeader from '~/molecules/RecordGroupHeader.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';

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

  private showTimerEditor(): void {
    this.pageLayer.push({ component: TimerEditor });
  }

  private get displayDate(): string {
    const date: Moment = moment(this.recordGroup.date);

    if (date.isSame(moment(), 'day')) return 'Today';
    if (date.isSame(moment().subtract(1, 'day'), 'day')) return 'Yesterday';

    return date.format('ddd, DD MMM');
  }

  private get getRecordGroup(): ITimerState[][] {
    let nextRecordGroup: (
      ITimerState[]
      | ITimerState[][]
    ) = this.recordGroup.records;

    nextRecordGroup = reduce(nextRecordGroup, (
      result: ITimerState[][],
      value: ITimerState,
    ): ITimerState[][] => {
      // 名前、プロジェクトID、タグIDが同じレコードの配列番号を求める
      const dateIndex: number = result.findIndex((element: ITimerState[]) => (
        element[0].name === value.name
        && element[0].projectId === value.projectId
        && isEqual(element[0].tagIds, value.tagIds)
      ));

      if (dateIndex >= 0) {
        result[dateIndex].push(value);
        return result;
      }

      result.push([value]);
      return result;
    }, []);

    return nextRecordGroup;
  }

  private get getTotal(): number {
    let total = 0;

    this.recordGroup.records.forEach((record: ITimerState): void => {
      if (record.startDatetime === null || record.endDatetime === null) return;

      const start: Moment = moment(record.startDatetime);
      const end: Moment = moment(record.endDatetime);

      // ミリ秒から秒にして合計値に追加する
      total += Math.floor(end.diff(start) / 1000);
    });

    return total;
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
