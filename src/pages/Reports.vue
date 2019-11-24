<template>
  <BaseCard class="Reports">
    <ReportsSkeletonScreen />
    <ReportsHeader />
    <NoReports />
    <ReportsTotal />
    <ReportsBarGraph />
    <ReportsPieChart />
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/atoms/BaseCard.vue';
import ReportsSkeletonScreen from '@/components/molecules/ReportsSkeletonScreen.vue';
import ReportsHeader from '@/components/organisms/ReportsHeader.vue';
import NoReports from '@/components/atoms/NoReports.vue';
import ReportsTotal from '@/components/molecules/ReportsTotal.vue';
import ReportsBarGraph from '@/components/molecules/ReportsBarGraph.vue';
import ReportsPieChart from '@/components/molecules/ReportsPieChart.vue';

export default {
  name: 'reports',
  components: {
    BaseCard,
    ReportsSkeletonScreen,
    ReportsHeader,
    NoReports,
    ReportsTotal,
    ReportsBarGraph,
    ReportsPieChart,
  },
};
</script>
