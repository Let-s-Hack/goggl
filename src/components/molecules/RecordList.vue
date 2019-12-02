<template>
  <li class="RecordList">
    <div class="RecordList_Summary">
      <p class="RecordList_SummaryCount _isActive">4</p>
      <div class="RecordList_SummaryTitleGroup">
        <h3 class="RecordList_SummaryTitle">タイトルタイトルタイトルタイトルタイトル</h3>
        <!-- colorとborder-colorにstyle属性でカラーコードを指定する -->
        <span
          class="RecordList_SummaryProject"
          :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
        >
          ゴーグル
        </span>
      </div>
      <div class="RecordList_SummaryTag">
        <img src="/img/icons/tag.svg" />
      </div>
      <div class="RecordList_SummaryTimeGroup">
        <span class="RecordList_SummaryTime">0:30:00</span>
        <img src="/img/icons/triangle-gray.svg" />
      </div>
    </div>
    <ul>
      <RecordListItem class="RecordList_Record" />
      <RecordListItem class="RecordList_Record" />
      <RecordListItem class="RecordList_Record" />
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RecordListItem from '~/atoms/RecordListItem.vue';

@Component({
  components: {
    RecordListItem,
  },
})
export default class RecordList extends Vue {
}
</script>

<style lang="scss" scoped>
.RecordList {
  &_Summary {
    $heightSize: 64px;
    display: flex;
    height: $heightSize;
    padding: 14px 16px;
    background: #FFF;
    box-sizing: border-box;

    &:active {
      background: linear-gradient(
        to bottom,
        #C5C6C8 0px,
        #FFF 1px,
        #FFF $heightSize - 2,
        #C5C6C8 $heightSize - 1
      );
    }
  }

  &_SummaryCount {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 32px;
    background: transparent;
    font-size: 1.6rem;
    box-sizing: border-box;
    border: 1px solid #C6C6C8;
    border-radius: 50%;
    color: #8A8A8E;

    &._isActive {
      background: #E5E5EC;
      border: none;
      color: #4ADA64;
    }
  }

  &_SummaryTitleGroup {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-right: 16px;
      overflow: hidden;

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 16px;
        height: 100%;
        background: linear-gradient(to left, #FFF, rgba(#FFF, 0));
        content: '';
      }
    }

    &_SummaryTag {
      flex: 0 1 auto;
      margin-right: 36px;

      > img {
        width: 10px;
      }
    }

    &_SummaryTimeGroup {
      flex: 0 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > img {
        align-self: flex-end;
        width: 10px;
        margin-right: 12px;
      }
    }

    &_SummaryTitle {
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      white-space: nowrap;
      text-overflow: clip;
    }

    &_SummaryProject {
      display: flex;
      align-items: center;
      margin-top: auto;
      font-size: 1.3rem;
      letter-spacing: 0.1rem;
      white-space: nowrap;
      text-overflow: clip;

      &::before {
        display: inline-block;
        margin-right: 4px;
        border-radius: 50%;
        // border-colorを親(.RecordList_SummaryProject)から継承するため、ショートハンドプロパティは使いません
        border-width: 3px;
        border-style: solid;
        border-color: inherit;
        border: 3px solid inherit;
        content: '';
      }
    }

    &_SummaryTime {
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
    }

    &_Record {
      border-top: 1px solid #C5C6C8;
    }
}
</style>
