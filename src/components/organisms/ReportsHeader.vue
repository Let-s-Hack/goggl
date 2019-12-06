<template>
  <div class="ReportsHeader">
    <h1 class="ReportsHeader_Title">This week</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Reportsheader extends Vue {
}
</script>

<style lang="scss" scoped>
.ReportsHeader {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 44px;
  padding: 8px 0;
  border-bottom: 1px solid #A9A9AC;
  background-color: #FFF;
  box-sizing: border-box;

  &_Title {
    position: relative;
    text-align: center;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      margin-left: 3px;
      border: 2px solid transparent;
      border-top: 3px solid #000;
    }
  }
}
</style>
