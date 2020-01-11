<template>
  <div class="DurationSelector">
    <BackgroundOverlay @click.native="pageLayer.pop()" />
    <BottomSheet>
      <BottomSheetHeader
        :back-button-callback="() => pageLayer.pop()"
        :action-button-callback="() => save()"
      >
        <template v-slot:icon>
          <SvgIcon name="arrow" class="Record_IconTag" />
        </template>
        <template v-slot:title>Start and stop times</template>
        <!-- TODO: クリックされたときに渡されたメソッドを実行する処理を書く -->
        <template v-slot:action>Save</template>
      </BottomSheetHeader>
      <div class="DurationSelector_Content">
        <ul class="DurationSelector_DurationGroup">
          <li class="DurationSelector_DurationItem">
            <div class="DurationSelector_DurationLabel">
              <SvgIcon name="triangle" class="DurationSelector_IconStart" />Start
            </div>
            <input id="durationStart" type="datetime-local" class="DurationSelector_DurationInput">
            <label for="durationStart" class="DurationSelector_DurationInputBlock">
              <!-- TODO: inputで入力した値を整形して表示する -->
              09:21 AM <span>01/04</span>
            </label>
          </li>
          <li class="DurationSelector_DurationItem">
            <div class="DurationSelector_DurationLabel _end">End</div>
            <input id="durationEnd" type="datetime-local" class="DurationSelector_DurationInput">
            <label for="durationEnd" class="DurationSelector_DurationInputBlock _isStop">
              <!-- TODO: inputで入力した値を整形して表示する -->
              Stop
            </label>
          </li>
        </ul>
        <div class="DurationSelector_TimePickerGroup">
          <img src="/img/durationTimer.svg" class="DurationSelector_TimePicker">
          <div class="DurationSelector_InputGroup">
            <SvgIcon name="timer" class="DurationSelector_TimerIcon" />
            <label class="DurationSelector_TimePickerInputGroup">
              <!-- TODO: inputで入力した値を整形して表示する -->
              00:<span>30</span>
              <input type="number" class="DurationSelector_TimePickerInput">
            </label>
          </div>
        </div>
      </div>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import BackgroundOverlay from '~/atoms/BackgroundOverlay.vue';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BackgroundOverlay,
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class DurationSelector extends Vue {
  private pageLayer = PageLayer;

  private save(): void {
    // TODO: 保存処理
    this.pageLayer.pop();
  }
}
</script>

<style lang="scss" scoped>
.DurationSelector {
  &_Content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  }

  &_DurationGroup {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
  }

  &_DurationItem {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50%;
    padding: 0 18px;
    box-sizing: border-box;
  }

  &_IconStart {
    width: 9px;
    margin-right: 4px;
    fill: #C4C4C6;
  }

  &_DurationLabel {
    margin-bottom: 8px;
    text-align: center;
    color: #C4C4C6;
    letter-spacing: 0.1rem;

    &._end::before {
      display: inline-block;
      margin-right: 4px;
      width: 9px;
      height: 9px;
      background-color: #C4C4C6;
      content: '';
    }
  }

  &_DurationInput {
    position: absolute;
    transform: scale(0);
  }

  &_DurationInputBlock {
    position: relative;
    display: block;
    line-height: 3.2rem;
    padding: 0 12px;
    background-color: #FAFAFC;
    border-radius: 1.6rem;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;

    &._isStop {
      color: #6FC53A;
    }

    .DurationSelector_DurationInput:focus + & {
      color: #6FC53A;

      > span {
        color: #6FC53A;
      }
    }

    > span {
      color: #B5BCC0;
    }
  }

  &_TimePickerGroup {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  &_TimePicker {
    width: 300px;
    height: 300px;
  }

  &_InputGroup {
    position: absolute;
    padding: 6px 12px;
    background-color: #E5E5EA;
    border-radius: 16.5px;
  }

  &_TimerIcon {
    width: 14px;
    fill: #8A8A8E;
  }

  &_TimePickerInputGroup {
    position: relative;
    margin-left: 8px;
    font-size: 2.1rem;
    letter-spacing: 0.2rem;
    color: #CECECE;

    > span {
      color: #000;
    }
  }

  &_TimePickerInput {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 100%;
    font-size: 2.1rem;
    text-align: right;
    appearance: none;
    background: transparent;
    color: transparent;
    caret-color: #6FC53A;
  }
}
</style>
