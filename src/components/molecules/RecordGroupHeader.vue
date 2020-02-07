<template>
  <div class="RecordGroupHeader">
    <h2 class="RecordGroupHeader_Date"><slot name="date" /></h2>
    <p class="RecordGroupHeader_Duration"><slot name="total" /></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecordGroupHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.RecordGroupHeader {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 16px;
  color: #85858C;

  &_Date {
    font-size: 1.5rem;
  }

  &_Duration {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
  }
}
</style>
