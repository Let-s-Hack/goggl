<template>
  <div class="RecordGroup">
    <RecordGroupHeader class="RecordGroup_Header" />
    <ul>
      <Record @click.native="showTimerEditor()" class="RecordGroup_Item" />
      <RecordList class="RecordGroup_Item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageLayer from '@/store/modules/PageLayer';
import Record from '~/atoms/Record.vue';
import RecordList from '~/molecules/RecordList.vue';
import RecordGroupHeader from '~/molecules/RecordGroupHeader.vue';
import TimerEditor from '~/organisms/TimerEditor.vue';

@Component({
  components: {
    Record,
    RecordList,
    RecordGroupHeader,
  },
})
export default class RecordGroup extends Vue {
  private pageLayer = PageLayer;

  private showTimerEditor(): void {
    this.pageLayer.push(TimerEditor);
  }
}
</script>

<style lang="scss" scoped>
.RecordGroup {
  & + & {
    .RecordGroup_Header {
      top: -22px;
      padding-top: 44px;
    }
  }

  &_Header {
    position: sticky;
    top: 0;
    z-index: $zIndex_recordGroupHeader;
    padding-top: 20px;
    padding-bottom: 8px;
    background: $color_timerBackground;
    border-bottom: 1px solid #C5C6C8;
  }

  &_Item {
    & + & {
      border-top: 1px solid #C5C6C8;
    }

    &:last-child {
      border-bottom: 1px solid #C5C6C8;
    }
  }
}
</style>
