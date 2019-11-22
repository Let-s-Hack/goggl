<template>
  <div class="BaseContent">
    BaseContent
    <slot />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BaseContent extends Vue {
}
</script>
