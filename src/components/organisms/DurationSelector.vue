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
        <template v-slot:action>Save</template>
      </BottomSheetHeader>
      <div class="DurationSelector_Content">
        <ul class="DurationSelector_DurationGroup">
          <li class="DurationSelector_DurationItem">
            <div class="DurationSelector_DurationLabel">
              <SvgIcon name="triangle" class="DurationSelector_IconStart" />Start
            </div>
            <input
              ref="durationStartInput"
              id="durationStart"
              type="datetime-local"
              class="DurationSelector_DurationInput"
            >
            <label for="durationStart" class="DurationSelector_DurationInputBlock">
              <!-- TODO: inputで入力した値を整形して表示する -->
              09:21 AM <span>01/04</span>
            </label>
          </li>
          <li class="DurationSelector_DurationItem">
            <div class="DurationSelector_DurationLabel _end">End</div>
            <input
              ref="durationEndInput"
              id="durationEnd"
              type="datetime-local"
              class="DurationSelector_DurationInput"
            >
            <label
              v-if="isTimerActive"
              @click.prevent="stop()"
              for="durationEnd"
              class="DurationSelector_DurationInputBlock _isStop"
            >Stop</label>
            <label
              v-else
              for="durationEnd"
              class="DurationSelector_DurationInputBlock"
            >
              {{ displayEndDatetime | format('HH:mm A ') }}
              <span>{{ displayEndDatetime | format('MM/DD') }}</span>
            </label>
          </li>
        </ul>
        <div class="DurationSelector_TimePickerGroup">
          <img src="/img/durationTimer.svg" class="DurationSelector_TimePicker">
          <div class="DurationSelector_InputGroup">
            <SvgIcon name="timer" class="DurationSelector_TimerIcon" />
            <input
              ref="timePickerInput"
              id="timePicker"
              type="number"
              pattern="\d*"
              class="DurationSelector_TimePickerInput"
            >
            <label
              for="timePicker"
              class="DurationSelector_TimePickerInputGroup"
            >
              <!-- TODO: inputで入力した値を整形して表示する -->
              00:<span>30</span>
            </label>
          </div>
        </div>
      </div>
    </BottomSheet>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import TimeRecorder from '@/store/modules/TimeRecorder';
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
  @Prop({ default: null }) focusTarget?: string | null;

  public $refs!: { [key: string]: HTMLInputElement };

  private pageLayer = PageLayer;

  private timeRecorder = TimeRecorder;

  private isTimerActive: boolean = this.timeRecorder.isActive;

  private get displayEndDatetime(): string {
    return (
      this.timeRecorder.getState({ key: 'endDatetime', type: 'tmp' })
      || this.timeRecorder.getState({ key: 'endDatetime' })
    );
  }

  mounted() {
    this.focus();
  }

  private save(): void {
    // TODO: 保存処理
    this.pageLayer.pop();
  }

  private stop(): void {
    this.timeRecorder.setState({
      type: 'tmp',
      key: 'endDatetime',
      value: moment().format('YYYY-MM-DD HH:mm'),
    });
    this.isTimerActive = false;
  }

  private focus(): void {
    if (this.focusTarget === null || this.focusTarget === undefined) return;

    const target: HTMLInputElement = this.$refs[this.focusTarget];

    if (typeof target === 'undefined') return;

    target.focus();
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
    font-weight: 500;
    white-space: nowrap;

    &._isStop {
      color: #6FC53A;
      font-weight: 400;
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
    width: 80px;
    height: 2.1rem;
    padding: 6px 12px;
    font-size: 2.1rem;
    letter-spacing: 0.2rem;
    text-align: right;
    background: transparent;
    color: transparent;
    caret-color: #6FC53A;
    appearance: none;
    -moz-appearance:textfield;
    -webkit-appearance: none;
  }
}
</style>
