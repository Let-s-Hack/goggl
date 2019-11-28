<template>
  <div class="CancelButton">
    Continue Editing
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CancelButton extends Vue {
}
</script>

<style lang="scss" scoped>
.CancelButton {
  height: 56px;
  line-height: 56px;
  border-radius: 13px;
  text-align: center;
  color: #007aff;
  background: #fff;
  letter-spacing: 0.36px;
  font-size: 1.9rem;
  font-weight: 500;
}
</style>
