<template>
  <div class="Calendar">
    <div class="Calendar_HeaderContainer">
      <div class="Calendar_Header">
        <span class="Calendar_Total">0:00:00</span>
        <span class="Calendar_Date">Sunday, Dec 29</span>
        <SvgIcon class="Calendar_Setting" name="setting" />
      </div>
      <ul class="Calendar_DayWeekList">
        <li class="Calendar_DayWeek">M</li>
        <li class="Calendar_DayWeek">T</li>
        <li class="Calendar_DayWeek">W</li>
        <li class="Calendar_DayWeek">T</li>
        <li class="Calendar_DayWeek">F</li>
        <li class="Calendar_DayWeek">S</li>
        <li class="Calendar_DayWeek">S</li>
      </ul>
      <ul class="Calendar_DayList">
        <li class="Calendar_Day">23</li>
        <li class="Calendar_Day">24</li>
        <li class="Calendar_Day">25</li>
        <li class="Calendar_Day">26</li>
        <li class="Calendar_Day">27</li>
        <li class="Calendar_Day">28</li>
        <li class="Calendar_Day _isToday">29</li>
      </ul>
    </div>
    <BaseContent class="Calendar_Content">
    </BaseContent>
    <GlobalNav class="Calendar_Nav" />
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
  display: flex;
  flex-direction: column;
  height: 100%;

  &_HeaderContainer {
    top: 0;
    width: 100%;
    height: 110px;
    padding: 0 8px;
    border-bottom: 1px solid #A9A9AC;
    background-color: #FFF;
    box-sizing: border-box;
  }

  &_Header {
    display: flex;
    height: 44px;
    align-items: center;
  }

  &_Total {
    margin-left: 12px;
    font-size: 1.2rem;
    color: #C2C8CB;
    letter-spacing: 0.1rem;
  }

  &_Date {
    position: absolute;
    left: 0;
    right: 0;
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
  }

  &_Setting {
    position: absolute;
    width: 18px;
    right: 32px;
    margin: auto;
    fill: #5B5B5B;
  }

  &_DayWeekList {
    display: flex;
    height: 30px;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &_DayWeek {
    width: 32px;
    font-size: 1.2rem;
    color: #B5BCC0;
    text-align: center;
  }

  &_DayList {
    display: flex;
    height: 30px;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &_Day {
    width: 32px;
    font-size: 1.4rem;
    text-align: center;

    &._isToday {
      height: 32px;
      color: #FFF;
      font-weight: 500;
      background-color: #06AAF5;
      border-radius: 50%;
      line-height: 32px;
    }
  }

  &_Content {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0);
    background-color: #FAFAFC;
  }

  &_Nav {
    box-shadow: 0 -2px 8px 0px rgba(#424147, 0.17);
  }
}
</style>
