<template>
  <div class="Reports">
    <ReportsHeader class="Reports_Header" />
    <BaseContent class="Reports_Content">
      <div class="Reports_CardContainer">
        <ReportsSummary class="Reports_Card" />
        <ReportsBarGraph class="Reports_Card" />
      </div>
      <template v-if="true">
        <ReportsPieChart class="Reports_PieChart"/>
      </template>
      <template v-else>
        <div class="Reports_NoReports">
          <SvgIcon class="Reports_NoReportsIcon" name="no-reports" />
          <p class="Reports_NoReportsHeading">Nothing here</p>
          <span class="Reports_NoReportsText">
            You have no time entries for the selected time period.
          </span>
        </div>
      </template>
    </BaseContent>
    <GlobalNav class="Reports_Nav" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';

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
  &_Header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: $zIndex_header;
  }

  &_Content {
    position: absolute;
    top: 0;
    margin-top: 44px;
    margin-bottom: 50px;
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

  &_Reports_NoReports {

    &Icon {

    }

    &Text {

    }
  }

  &_Nav {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
