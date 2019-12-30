<template>
  <BaseContent class="Reports">
    <ReportsHeader />
    <ReportsSummary />
    <ReportsBarGraph />
    <ReportsPieChart />
  </BaseContent>
</template>

<script>
import ReportsSummary from '~/molecules/ReportsSummary.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';

export default {
  name: 'reports',
  components: {
    ReportsSummary,
    BaseContent,
    ReportsHeader,
    ReportsBarGraph,
    ReportsPieChart,
  },
};
</script>
