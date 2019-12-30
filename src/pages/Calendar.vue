<template>
  <div class="Calendar">
    <div class="Calendar_HeaderContainer">
      <div class="Calendar_Header">
        <span class="Calendar_Total">0:00:00</span>
        <span class="Calendar_Date">Sunday, Dec 29</span>
        <SvgIcon class="Calendar_Setting" name="setting" />
      </div>
      <ul class="Calendar_DayWeekList">
        <li
          v-for="(dayWeek, index) in dayWeeks"
          :key="index"
          class="Calendar_DayWeek"
        >
          {{ dayWeek }}
        </li>
      </ul>
      <ul class="Calendar_DayList">
        <li class="Calendar_Day">23</li>
        <li class="Calendar_Day">24</li>
        <li class="Calendar_Day">25</li>
        <li class="Calendar_Day">26</li>
        <li class="Calendar_Day _isToday">27</li>
        <li class="Calendar_Day _isFuture">28</li>
        <li class="Calendar_Day _isFuture">29</li>
      </ul>
    </div>
    <BaseContent class="Calendar_Content">
      <ul class="Calendar_List">
        <li
          v-for="(time, index) in times"
          :key="index"
          class="Calendar_Item"
        >
          <span class="Calendar_Time">{{ time }}</span>
          <hr class="Calendar_Line">
        </li>

      </ul>
    </BaseContent>
    <GlobalNav class="Calendar_Nav" />
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import BaseContent from '~/organisms/BaseContent.vue';
import GlobalNav from '~/organisms/GlobalNav.vue';

@Component({
  components: {
    BaseContent,
    GlobalNav,
  },
})
export default class Calendar extends Vue {
  dayWeeks = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  times = [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM',
    '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM',
  ];
}
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
    font-weight: 400;
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

    &._isFuture {
      color: #B5BCC0;
    }
  }

  &_Content {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0);
    background-color: #FAFAFC;
  }

  &_List {
    padding: 0 36px;
    box-sizing: border-box;
  }

  &_Item {
    display: flex;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 40px;

    & + & {
      margin-top: 48px;
    }
  }

  &_Time {
    width: 45px;
    margin-right: 28px;
    font-size: 1.2rem;
    color: #C6CBCF;
    white-space: nowrap;
  }

  &_Line {
    width: 100%;
    border-color: #C2C8CB;
  }

  &_Nav {
    z-index: $zIndex_calendarNav;
    box-shadow: 0 -2px 8px 0px rgba(#424147, 0.17);
  }
}
</style>
