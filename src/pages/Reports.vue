<template>
  <BaseCard class="Reports">
    <ReportsSkeletonScreen />
    <ReportsHeader />
    <ReportsTotal />
    <ReportsBarGraph />
    <ReportsPieChart />
  </BaseCard>
</template>

<script>
import BaseCard from '~/atoms/BaseCard.vue';
import ReportsSkeletonScreen from '~/molecules/ReportsSkeletonScreen.vue';
import ReportsHeader from '~/organisms/ReportsHeader.vue';
import ReportsTotal from '~/molecules/ReportsTotal.vue';
import ReportsBarGraph from '~/molecules/ReportsBarGraph.vue';
import ReportsPieChart from '~/molecules/ReportsPieChart.vue';

export default {
  name: 'reports',
  components: {
    BaseCard,
    ReportsSkeletonScreen,
    ReportsHeader,
    ReportsTotal,
    ReportsBarGraph,
    ReportsPieChart,
  },
};
</script>
