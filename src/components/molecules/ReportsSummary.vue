<template>
  <BaseCard class="ReportsSummary">
    <div class="ReportsSummary_Total _isActive">
      <p class="ReportsSummary_Label">TOTAL</p>
      <p class="ReportsSummary_Count">59:15:47</p>
      <div class="ReportsSummary_BarGraph">
        <!-- TODO: v-forを使う -->
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
        <div class="ReportsSummary_BarGraphItem"></div>
      </div>
    </div>
    <div class="ReportsSummary_Billable _isActive">
      <p class="ReportsSummary_Label">BILLABLE</p>
      <p class="ReportsSummary_Count">0.00%</p>
      <div class="ReportsSummary_Line"></div>
    </div>
  </BaseCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '~/atoms/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsSummary extends Vue {
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
  }

  &_BarGraph {
    $maxHeight: 21px;
    display: flex;
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
          margin-top: $maxHeight - $height;
          height: $height;
        }
      }

      & + & {
        margin-left: 4px;
      }

      .ReportsSummary_Total._isActive & {
        background-color: #E9FAEC;
      }
    }
  }

  &_Line {
    margin-top: 27px;
    border-radius: 1px;
    border-bottom: 6px solid #ECF0F3;

    .ReportsSummary_Billable._isActive & {
      border-color: #C3EBFD;
    }
  }
}
</style>
