<template>
  <nav class="GlobalNav">
    <ul class="GlobalNav_List">
      <!-- TODO: 選択中は遷移させない -->
      <li class="GlobalNav_Item">
        <a href="/timer"><SvgIcon class="GlobalNav_Icon _isActive" name="time" /></a>
      </li>
      <li class="GlobalNav_Item">
        <a href="/reports"><SvgIcon class="GlobalNav_Icon" name="graph" /></a>
      </li>
      <li class="GlobalNav_Item">
        <a href="/calendar"><SvgIcon class="GlobalNav_Icon" name="calendar" /></a>
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
  border-top: 1px solid #B2B2B2;
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

    &._isActive {
      fill: #06AAF5;
    }
  }
}
</style>
