<template>
  <div class="BaseCard">
    BaseCard
    <slot />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseCard extends Vue {
}
</script>
