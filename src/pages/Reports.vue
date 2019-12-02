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
import BaseContent from '~/organisms/BaseContent.vue';
import ReportsSkeletonScreen from '~/molecules/ReportsSkeletonScreen.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsSummary from '~/molecules/ReportsSummary.vue';
import ReportsBarGraph from '~/molecules/ReportsBarGraph.vue';
import ReportsPieChart from '~/molecules/ReportsPieChart.vue';

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
