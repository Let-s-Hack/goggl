<template>
  <div class="RecordGroup">
    <RecordGroupHeader class="RecordGroup_Header">
      <template v-slot:date>
        <template v-if="diffDays() > 1">
          {{ recordGroup.date | format('ddd, DD MMM') }}
        </template>
        <template v-else-if="diffDays() === 1">
          Yesterday
        </template>
        <template v-else>
          Today
        </template>
      </template>
      <template v-slot:total>{{ totalSeconds | toTime }}</template>
    </RecordGroupHeader>
    <ul
      v-for="(records, index) in recordsList"
      :key="records[0].id || index"
    >
      <RecordList
        v-if="records.length > 1"
        :records="records"
        class="RecordGroup_Item"
      />
      <Record
        v-else-if="records[0]"
        @click.native="showTimerEditor()"
        :record="records[0]"
        class="RecordGroup_Item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { findIndex, forEach } from 'lodash';
import moment, { Moment } from 'moment';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRecordGroup } from '~/types';
import { ITimerState } from '@/store/types';
import PageLayer from '@/store/modules/PageLayer';
import Record from '~/atoms/Record.vue';
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

  private diffDays(): number {
    const now: Moment = moment();
    const recordDate: Moment = moment(this.recordGroup.date);
    const diffDays: number = now.diff(recordDate, 'days');

    return diffDays;
  }

  private get recordsList(): ITimerState[][] {
    const recordsList: ITimerState[][] = [];

    forEach(this.recordGroup.records, (record: ITimerState): void => {
      const sameRecordIndex: number = findIndex(recordsList, [0, {
        title: record.title,
        projectId: record.projectId,
        tagIds: record.tagIds,
      }]);

      if (sameRecordIndex >= 0) {
        recordsList[sameRecordIndex].push(record);
        return;
      }

      recordsList.push([record]);
    });

    return recordsList;
  }

  private get totalSeconds(): number {
    let totalSeconds = 0;

    forEach(this.recordGroup.records, (record: ITimerState): void => {
      if (record.startDatetime === null || record.endDatetime === null) return;

      const start: Moment = moment(record.startDatetime);
      const end: Moment = moment(record.endDatetime);

      totalSeconds += Math.floor(end.diff(start, 'seconds'));
    });

    return totalSeconds;
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
