<template>
  <li class="Record">
    <div class="Record_Left">
      <!-- TODO: _isEmptyの出し分け -->
      <h3 class="Record_Title _isEmpty">説明を追加</h3>
      <!-- colorとborder-colorにstyle属性でカラーコードを指定する -->
      <span
        class="Record_Project"
        :style="{ borderColor: '#3F46E3', color: '#3F46E3' }"
      >
        ゴーグル
      </span>
    </div>
    <div class="Record_Center">
      <SvgIcon name="tag" class="Record_IconTag" />
    </div>
    <div class="Record_Right">
      <span class="Record_Time">0:30:00</span>
      <SvgIcon name="triangle" class="Record_IconStart" />
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
    background: #D9D9D9;

    .Record_Left::after {
      background: linear-gradient(to left, #D9D9D9, rgba(#D9D9D9, 0));
    }

    .Record_IconStart {
      fill: #BCBCBE;
    }
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

    &._isEmpty {
      color: #C7C7C9;
    }
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
      // border-colorを親(.Record_Project)から継承するため、ショートハンドプロパティは使いません
      border-width: 3px;
      border-style: solid;
      border-color: inherit;
      border: 3px solid inherit;
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
