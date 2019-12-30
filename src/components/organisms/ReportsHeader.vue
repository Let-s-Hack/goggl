<template>
  <div class="ReportsHeader">
    <div class="ReportsHeader_Inner">
      <SvgIcon v-if="isLoading" class="ReportsHeader_Spinner" name="spinner" />
      <p v-else class="ReportsHeader_Title">This week</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Reportsheader extends Vue {
  @Prop({ default: true }) isLoading?: boolean;
}
</script>

<style lang="scss" scoped>
.ReportsHeader {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    width: 20px;
    fill: #BABABA;
  }

  &_Title {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;

    &::after {
      content: '';
      width: 0;
      height: 0;
      margin-top: 4px;
      margin-left: 3px;
      border: 2px solid transparent;
      border-top: 4px solid #000;
    }
  }
}
</style>
