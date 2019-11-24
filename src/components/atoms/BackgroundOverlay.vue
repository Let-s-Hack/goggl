<template>
  <div class="BackgroundOverlay">
    BackgroundOverlay
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BackgroundOverlay extends Vue {
}
</script>
