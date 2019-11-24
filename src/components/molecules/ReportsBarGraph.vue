<template>
  <BaseCard class="ReportsBarGraph">
    ReportsBarGraph
  </BaseCard>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaseCard from '~/atoms/BaseCard.vue';

@Component({
  components: {
    BaseCard,
  },
})
export default class ReportsBarGraph extends Vue {
}
</script>
