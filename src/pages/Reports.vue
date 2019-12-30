<template>
  <BaseContent class="Reports">
    <ReportsHeader />
    <ReportsSummary />
    <ReportsBarGraph />
    <ReportsPieChart />
  </BaseContent>
</template>

<script>
import BaseContent from '~/organisms/BaseContent.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';

export default {
  name: 'reports',
  components: {
    BaseContent,
    ReportsBarGraph,
    ReportsHeader,
    ReportsPieChart,
    ReportsSummary,
  },
};
</script>
