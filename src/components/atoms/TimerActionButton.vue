<template>
  <button class="TimerActionButton">
    <img src="/img/icons/triangle.svg" />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TimerActionButton extends Vue {
}
</script>

<style lang="scss" scoped>
  .TimerActionButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: $success;

    & > img {
      padding-left: 4px;
    }
  }
</style>
