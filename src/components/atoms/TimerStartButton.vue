<template>
  <button class="TimerStartButton">
    <SvgIcon class="TimerStartButton_IconStart" name="triangle" />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SvgIcon from '~/atoms/SvgIcon.vue';

@Component({
  components: {
    SvgIcon,
  },
})
export default class TimerStartButton extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerStartButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #4CD864;

  &:active::after {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(#000, 0.3);
    content: '';
  }

  &_IconStart {
    width: 16px;
    margin-left: 4px;
    fill: #FFF;
  }
}
</style>
