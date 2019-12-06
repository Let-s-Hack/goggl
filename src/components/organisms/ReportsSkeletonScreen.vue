<template>
  <div class="ReportsSkeletonScreen">
    <header class="ReportsSkeletonScreen_Header">
      <!-- TODO: Loadingのアニメーションをつくる -->
      <img class="ReportsSkeletonScreen_HeaderImage" src="/img/icons/spinner.svg" />
    </header>
    <BaseCard class="ReportsSkeletonScreen_Summary">
      <div class="ReportsSkeletonScreen_SummaryTotal">
        <p class="ReportsSkeletonScreen_SummaryLabel">TOTAL</p>
        <p class="ReportsSkeletonScreen_SummaryCount">59:15:47</p>
        <div class="ReportsSkeletonScreen_SummaryBarGraph">
          <div class="ReportsSkeletonScreen_SummaryBarGraphItem"></div>
          <div class="ReportsSkeletonScreen_SummaryBarGraphItem"></div>
          <div class="ReportsSkeletonScreen_SummaryBarGraphItem"></div>
          <div class="ReportsSkeletonScreen_SummaryBarGraphItem"></div>
        </div>
      </div>
      <div class="ReportsSkeletonScreen_SummaryBillable">
        <p class="ReportsSkeletonScreen_SummaryLabel">BILLABLE</p>
        <p class="ReportsSkeletonScreen_SummaryCount">0.00%</p>
        <div class="ReportsSkeletonScreen_SummaryLine"></div>
      </div>
    </BaseCard>
    <BaseCard class="ReportsSkeletonScreen_BarGraph">
      <p class="ReportsSkeletonScreen_BarGraphTitle">CLOCKED HOURS</p>
       <ul class="ReportsSkeletonScreen_BarGraphLineGroup">
         <li class="ReportsSkeletonScreen_BarGraphLine">10 h</li>
         <li class="ReportsSkeletonScreen_BarGraphLine">5 h</li>
         <li class="ReportsSkeletonScreen_BarGraphLine">0 h</li>
       </ul>
       <div class="ReportsSkeletonScreen_BarGraphDateGroup">
         <span>1/4</span>
         <span>30/4</span>
       </div>
    </BaseCard>
    <!-- TODO: 円グラフにアニメーションをつける -->
    <div class="ReportsSkeletonScreen_PieChart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '~/atoms/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsSkeletonScreen extends Vue {
}
</script>

<style lang="scss" scoped>
.ReportsSkeletonScreen {
  padding-top: 56px;
  background: #FBFBFD;

  &_Header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    background: #FFF;
    box-sizing: border-box;
    border-bottom: 1px solid #AAA;
  }

  &_HeaderImage {
    width: 20px;
    height: 20px;
  }

  &_Summary {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 16px 12px 32px 12px;
    margin: 12px 16px 0 16px;
  }

  &_SummaryTotal {
    width: 50%;
    margin-right: 24px;
  }

  &_SummaryBillable {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  &_SummaryLabel {
    left: 0;
    font-size: 1.2rem;
    color: #8E8E93;
  }

  &_SummaryCount {
    margin-top: 18px;
    font-size: 2.4rem;
    color: #CECECE;
  }

  &_SummaryBarGraph {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: flex-start;
    height: 21px;
    margin-top: 12px;
  }

  &_SummaryBarGraphItem {
    width: 27px;
    background-color: #DCE9F8;

    $heights: (15px, 10px, 21px, 6px);
    @each $height in $heights {
      &:nth-child(#{index($heights, $height)}) {
        height: $height;
      }
    }

    & + & {
      margin-left: 4px;
    }
  }

  &_SummaryLine {
    margin-top: auto;
    border-radius: 1px;
    border-bottom: 6px solid #ECF0F3;
  }

  &_BarGraph {
    padding-bottom: 30px;
    margin: 24px 16px 0 16px;
  }

  &_BarGraphTitle {
    left: 0;
    font-size: 1.2rem;
    color: #8E8E93;
  }

  &_BarGraphLineGroup {
    width: calc(100% + 24px);
    margin: 20px -12px 0;
  }

  &_BarGraphLine {
    padding: 0 24px 4px 0;
    text-align: right;
    border-bottom: 1px solid #E6E6EA;
    font-size: 1.2rem;
    letter-spacing: 0.01rem;
    color: #C5C5C5;

    & + & {
      margin-top: 76px;
    }
  }

  &_BarGraphDateGroup {
    display: flex;
    justify-content: space-between;
    margin: 12px 40px 0 0;
    font-size: 1.2rem;
    letter-spacing: 0.01rem;
    color: #C5C5C5;
  }

  &_PieChart {
    width: 268px;
    height: 268px;
    margin: 34px auto 0;
    border-radius: 50%;
    background: #AEAEB2;
  }
}
</style>
