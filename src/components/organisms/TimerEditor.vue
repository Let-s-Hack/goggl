<template>
  <BottomSheet class="TimerEditor">
    <BottomSheetHeader>
      <template v-slot:icon>
        <SvgIcon class="TimerEditor_CloseIcon" name="close" />
      </template>
      <template v-slot:title>Edit</template>
    </BottomSheetHeader>
    <ul>
      <li class="TimerEditor_InputGroup">
        <!-- TODO: v-modelを使用、_isEmptyの出し分け -->
        <input type="text" class="TimerEditor_Description _isEmpty" value="Add description"/>
      </li>
      <li class="TimerEditor_InputGroup"></li>
      <li class="TimerEditor_InputGroup"></li>
      <li class="TimerEditor_InputGroup _existsIcon"></li>
      <li class="TimerEditor_InputGroup _existsIcon"></li>
      <li class="TimerEditor_InputGroup _existsIcon"></li>
    </ul>
    <div class="TimerEditor_ButtonGroup">
      <button class="TimerEditor_DeleteButton">Delete</button>
      <button class="TimerEditor_ConfirmButton">Confirm changes</button>
    </div>
  </BottomSheet>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomSheet from '~/atoms/BottomSheet.vue';
import BottomSheetHeader from '~/molecules/BottomSheetHeader.vue';

@Component({
  components: {
    BottomSheet,
    BottomSheetHeader,
  },
})
export default class TimerEditor extends Vue {
}
</script>

<style lang="scss" scoped>
.TimerEditor {
  height: 430px;
  $padding: 15px;

  &_CloseIcon {
    fill: #8A8A8E;
  }

  &_InputGroup {
    height: 48px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: $padding;
    box-sizing: border-box;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &._existsIcon {
      height: 56px;
    }

    &:not(:last-child)  {
      border-bottom: 1px solid #C6C6C8;
    }
  }

  input {
    caret-color: #34C759;
  }

  &_Description {
    width: 100%;
    height: 100%;

    &._isEmpty {
      color: #CECECE;
    }
  }

  &_ButtonGroup {
    display: flex;
    justify-content: space-around;
    padding: 10px $padding 16px $padding;
  }

  &_DeleteButton {
    position: relative;
    width: 110px;
    height: 40px;
    border-radius: 8px;
    background-color: #D1D1D6;
    color: #FFF;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &:active::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(#D1D1D6, 0.75);
      border-radius: inherit;
      content: '';
    }
  }

  &_ConfirmButton {
    position: relative;
    width: 206px;
    height: 40px;
    border-radius: 8px;
    background-color: #34C759;
    color: #FFF;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    &:active::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(#34C759, 0.75);
      border-radius: inherit;
      content: '';
    }
  }
}
</style>
