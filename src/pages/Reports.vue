<template>
  <div class="Reports">
    <ReportsHeader class="Reports_Header" />
    <BaseContent class="Reports_Content">
      <div class="Reports_CardContainer">
        <ReportsSummary class="Reports_Card" />
        <ReportsBarGraph class="Reports_Card" />
      </div>
      <!-- TODO: 出し分け -->
      <template v-if="false">
        <ReportsPieChart class="Reports_PieChart"/>
      </template>
      <template v-else>
        <div class="Reports_NoReports">
          <SvgIcon class="Reports_NoReportsIcon" name="no-reports" />
          <p class="Reports_NoReportsHeading">Nothing here</p>
          <span class="Reports_NoReportsText">
            You have no time entries for<br>the selected time period.
          </span>
        </div>
      </template>
    </BaseContent>
    <GlobalNav class="Reports_Nav" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ReportsSummary from '~/molecules/ReportsSummary.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';

@Component({
  components: {
    BaseContent,
    GlobalNav,
    ReportsBarGraph,
    ReportsHeader,
    ReportsPieChart,
    ReportsSummary,
  },
})
export default class Reports extends Vue {
}
</script>

<style lang="scss" scoped>
.Reports {
  display: flex;
  flex-direction: column;
  height: 100%;

  &_Header {
    top: 0;
    width: 100%;
  }

  &_Content {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0);
  }

  &_CardContainer {
    padding: 0 16px;
    box-sizing: border-box;
  }

  &_Card {
    margin-top: 12px;

    & + & {
      margin-top: 24px;
    }
  }

  &_PieChart {
    margin-top: 32px;
  }

  &_NoReports {
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &_NoReportsIcon {
    width: 85px;
    height: 85px;
  }

  &_NoReportsHeading {
    margin-top: 16px;
    font-size: 1.8rem;
  }

  &_NoReportsText {
    margin-top: 16px;
    font-size: 1.3rem;
    color: #B5BCC0;
    text-align: center;
    line-height: normal;
    letter-spacing: 0.1rem;
  }

  &_Nav {
    bottom: 0;
    width: 100%;
  }
}
</style>
