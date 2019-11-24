<template>
  <BackgroundOverlay class="BottomSheet">
    BottomSheet
    <slot />
  </BackgroundOverlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BackgroundOverlay from '@/components/atoms/BackgroundOverlay.vue';

@Component({
  components: {
    BackgroundOverlay,
  },
})
export default class BottomSheet extends Vue {
}
</script>
