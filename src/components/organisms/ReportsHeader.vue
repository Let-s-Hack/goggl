<template>
  <div class="ReportsHeader">
    <div class="ReportsHeader_Inner">
      <!-- TODO: ローディング時の出し分け -->
      <img class="ReportsHeader_Spinner" src="/img/icons/spinner.svg">
      <p class="ReportsHeader_Title">This week</p>
    </div>
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

  &_Inner {
    position: relative;
    margin: 0 auto;
  }

  &_Spinner {
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translateX(-100%);
  }

  &_Title {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

    &::after {
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-25%);
      margin-left: 3px;
      border: 2px solid transparent;
      border-top: 4px solid #000;
    }
  }
}
</style>
