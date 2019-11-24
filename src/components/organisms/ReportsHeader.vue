<template>
  <div class="Reportsheader">
    Reportsheader
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Reportsheader extends Vue {
}
</script>
