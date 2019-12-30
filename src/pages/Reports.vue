<template>
  <div class="Reports">
    <ReportsHeader />
    <BaseContent class="Reports_Content">
      <ReportsSummary />
      <ReportsBarGraph />
      <template v-if="true">
        <ReportsPieChart />
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseContent from '~/organisms/BaseContent.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';

@Component({
  components: {
    BaseContent,
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
  &_Content {

  }

  &_Reports_NoReports {

    &Icon {

    }

    &Text {

    }
  }
}
</style>
