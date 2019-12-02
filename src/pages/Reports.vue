<template>
  <BaseContent class="Reports">
    <ReportsSkeletonScreen />
    <ReportsHeader />
    <ReportsSummary />
    <ReportsBarGraph />
    <ReportsPieChart />
  </BaseContent>
</template>

<script>
import ReportsSkeletonScreen from '~/molecules/ReportsSkeletonScreen.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';
import BaseContent from '~/organisms/BaseContent.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsBarGraph from '~/organisms/ReportsBarGraph.vue';
import ReportsPieChart from '~/organisms/ReportsPieChart.vue';

export default {
  name: 'reports',
  components: {
    BaseContent,
    ReportsSkeletonScreen,
    ReportsHeader,
    ReportsSummary,
    ReportsBarGraph,
    ReportsPieChart,
  },
};
</script>
