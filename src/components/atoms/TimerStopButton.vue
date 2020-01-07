<template>
  <button class="TimerStopButton"></button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerStopButton extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerStopButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #F11212;

  &::before {
    display: block;
    width: 11px;
    height: 11px;
    background: #FFF;
    border-radius: 1px;
    content: '';
  }

  &:active::after {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(#000, 0.3);
    content: '';
  }
}
</style>
