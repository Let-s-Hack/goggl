<template>
  <div class="BottomSheet">
    BottomSheet
    <slot />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class BottomSheet extends Vue {
}
</script>
