<template>
  <div class="ActiveTimer">
    ActiveTimer
    <TimerStopButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TimerStopButton from '~/atoms/TimerStopButton.vue';

@Component({
  components: {
    TimerStopButton,
  },
})
export default class ActiveTimer extends Vue {
}
</script>
