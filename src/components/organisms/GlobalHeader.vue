<template>
  <div class="GlobalHeader">
    <img class="GlobalHeader_Logo" src="/img/logo.svg" />
    <img class="GlobalHeader_Setting" src="/img/icons/setting.svg" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GlobalHeader extends Vue {
}
</script>

<style lang="scss" scoped>
.GlobalHeader {
  position: relative;
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

  &_Logo {
    width: 64px;
    margin: auto;
  }

  &_Setting {
    position: absolute;
    width: 16px;
    right: 28px;
    margin: auto;
  }
}
</style>
