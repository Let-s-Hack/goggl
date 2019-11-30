<template>
  <li class="Record">
    <div class="Record_Left">
      <h3 class="Record_Title">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</h3>
      <!-- colorとborder-colorにstyle属性でカラーコードを指定する -->
      <span
        class="Record_Project"
        :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
      >
        ゴーグル
      </span>
    </div>
    <div class="Record_Center">
      <img src="/img/icons/tag.svg" />
    </div>
    <div class="Record_Right">
      <span class="Record_Time">0:30:00</span>
      <img src="/img/icons/triangle-gray.svg" />
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Record extends Vue {
}
</script>

<style lang="scss" scoped>
.Record {
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
      background: linear-gradient(to left, #FFF, rgba(#FFF, 0));
      content: '';
    }
  }

  &_Center {
    flex: 0 1 auto;
    margin-right: 36px;

    > img {
      width: 10px;
    }
  }

  &_Right {
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
}
</style>
