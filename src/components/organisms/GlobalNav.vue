<template>
  <nav class="GlobalNav">
    <ul class="GlobalNav_List">
      <li class="GlobalNav_Item">
        <router-link :to="{ path: 'timer' }" exact-active-class="_isActive">
          <SvgIcon name="time" class="GlobalNav_Icon" />
        </router-link>
      </li>
      <li class="GlobalNav_Item">
        <router-link :to="{ path: 'reports' }" exact-active-class="_isActive">
          <SvgIcon name="graph" class="GlobalNav_Icon" />
        </router-link>
      </li>
      <li class="GlobalNav_Item">
        <router-link :to="{ path: 'calendar' }" exact-active-class="_isActive">
          <SvgIcon name="calendar" class="GlobalNav_Icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GlobalNav extends Vue {
}
</script>

<style lang="scss" scoped>
.GlobalNav {
  height: 50px;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  border-top: 1px solid $color_grayBorder;
  background-color: #FFF;

  &_List {
    display: flex;
    height: 100%;
  }

  &_Item {
    flex: 1 0 auto;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  }

  &_Icon {
    width: 20px;
    height: 20px;
    fill: #999;

    a._isActive > & {
      fill: #06AAF5;
    }
  }
}
</style>
