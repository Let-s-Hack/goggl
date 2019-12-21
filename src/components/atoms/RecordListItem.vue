<template>
  <li class="RecordListItem">
    <div class="RecordListItem_Left">
      <h4 class="RecordListItem_Title">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h4>
      <!-- colorとborder-colorにstyle属性でカラーコードを指定する -->
      <span
        class="RecordListItem_Project"
        :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
      >
        ゴーグル
      </span>
    </div>
    <div class="RecordListItem_Center">
      <SvgIcon class="RecordListItem_IconTag" name="tag" />
    </div>
    <div class="RecordListItem_Right">
      <span class="RecordListItem_Time">0:30:00</span>
      <SvgIcon class="RecordListItem_IconStart" name="triangle" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecordListItem extends Vue {
}
</script>

<style lang="scss" scoped>
.RecordListItem {
  $heightSize: 64px;
  display: flex;
  height: $heightSize;
  padding: 14px 16px 14px 76px;
  background: #F9FAFC;
  box-sizing: border-box;

  &:active {
    background: linear-gradient(
      to bottom,
      #C5C6C8 0px,
      #F9FAFC 1px,
      #F9FAFC $heightSize - 2,
      #C5C6C8 $heightSize - 1
    );
  }

  &_Left {
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
      background: linear-gradient(to left, #F9FAFC, rgba(#F9FAFC, 0));
      content: '';
    }
  }

  &_Center {
    flex: 0 1 auto;
    margin-right: 36px;
  }

  &_Right {
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &_Title {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    white-space: nowrap;
    text-overflow: clip;
  }

  &_Project {
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
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      content: '';
    }
  }

  &_Time {
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }

  &_IconTag {
    width: 10px;
    fill: #B5BCC0;
  }

  &_IconStart {
    align-self: flex-end;
    width: 10px;
    margin-right: 12px;
    fill: #DCDCDD;
  }
}
</style>
