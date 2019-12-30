<template>
  <div class="Calendar">
    <div class="Calendar_Header"></div>
    <BaseContent class="Calendar_Content">
    </BaseContent>
    <GlobalNav class="Calendar_Nav">
    </GlobalNav>
  </div>
</template>

<script>
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';

export default {
  name: 'calendar',
  components: {
    BaseContent,
    GlobalNav,
  },
};
</script>

<style lang="scss" scoped>
.Calendar {
}
</style>
