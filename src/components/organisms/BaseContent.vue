<template>
  <div class="BaseContent">
    BaseContent
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseContent extends Vue {
}
</script>
