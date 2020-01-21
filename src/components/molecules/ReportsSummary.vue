<template>
  <BaseCard :class="['ReportsSummary', { '_isLoading': isLoading }]">
    <div :class="['ReportsSummary_Total', { '_isActive': total > 0 || billable > 0 }]">
      <p class="ReportsSummary_Label">TOTAL</p>
      <p
        v-if="isLoading"
        class="ReportsSummary_Count"
      >0:00:00</p>
      <p
        v-else
        class="ReportsSummary_Count"
      >{{ total | toTime }}</p>
      <div class="ReportsSummary_BarGraph">
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
      </div>
    </div>
    <div :class="['ReportsSummary_Billable', { '_isActive': total > 0 || billable > 0 }]">
      <p class="ReportsSummary_Label">BILLABLE</p>
      <p
        v-if="isLoading"
        class="ReportsSummary_Count"
      >0.00%</p>
      <p
        v-else
        class="ReportsSummary_Count"
      >{{ billable.toFixed(2) }}%</p>
      <div class="ReportsSummary_Line"></div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ReportManager from '@/store/modules/ReportManager';
import BaseCard from '~/atoms/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsSummary extends Vue {
  @Prop({ default: false }) isLoading?: boolean;

  private reportManager = ReportManager;

  private get total(): number {
    return this.reportManager.reportState.total;
  }

  private get billable(): number {
    return this.reportManager.reportState.billable;
  }
}
</script>

<style lang="scss" scoped>
.ReportsSummary {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 16px 12px 32px 12px;

  &_Total {
    width: 50%;
    margin-right: 24px;
  }

  &_Billable {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &_Label {
    left: 0;
    font-size: 1.2rem;
    color: #8E8E93;
  }

  &_Count {
    margin-top: 18px;
    font-size: 2.4rem;
    color: #CECECE;

    .ReportsSummary_Total._isActive & {
      color: #4CD964;
    }

    .ReportsSummary_Billable._isActive & {
      color: #00ABFC;
    }

    .ReportsSummary._isLoading & {
      color: #CECECE;
    }
  }

  &_BarGraph {
    $maxHeight: 21px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 12px;
    height: $maxHeight;

    &Item {
      width: 27px;
      background-color: #F7F7F7;

      $heights: (15px, 10px, 21px, 6px);
      @each $height in $heights {
        &:nth-child(#{index($heights, $height)}) {
          height: $height;
        }
      }

      & + & {
        margin-left: 4px;
      }

      .ReportsSummary_Total._isActive & {
        background-color: #E9FAEC;
      }

      .ReportsSummary._isLoading & {
        background-color: #DCE9F8;
      }
    }
  }

  &_Line {
    margin-top: auto;
    border-radius: 1px;
    border-bottom: 6px solid #ECF0F3;

    .ReportsSummary_Billable._isActive & {
      border-color: #C3EBFD;
    }

    .ReportsSummary._isLoading & {
      border-color: #ECF0F3;
    }
  }
}
</style>
