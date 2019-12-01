<template>
  <div class="Reports">
    <ReportsSkeletonScreen />
    <ReportsHeader />
    <ReportsSummary />
    <ReportsBarGraph />
    <ReportsPieChart />
  </div>
</template>

<script>
import ReportsSkeletonScreen from '~/molecules/ReportsSkeletonScreen.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';
import ReportsBarGraph from '~/molecules/ReportsBarGraph.vue';
import ReportsPieChart from '~/molecules/ReportsPieChart.vue';

export default {
  name: 'reports',
  components: {
    ReportsSkeletonScreen,
    ReportsHeader,
    ReportsSummary,
    ReportsBarGraph,
    ReportsPieChart,
  },
};
</script>
