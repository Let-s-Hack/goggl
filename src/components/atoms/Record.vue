<template>
  <li class="Record">
    <div class="Record_Left">
      <h3
        :class="['Record_Title', { '_isEmpty': !record.title }]"
      >{{ record.title || 'Add description' }}</h3>
      <span
        v-if="!projectManager.isNoProject(record.projectId)"
        class="Record_Project"
        :style="{
          borderColor: project.color,
          color: project.color
        }"
      >{{ project.name }}</span>
    </div>
    <div
      v-if="recordManager.hasTags(record.id)"
      class="Record_Center"
    >
      <SvgIcon name="tag" class="Record_IconTag" />
    </div>
    <div class="Record_Right">
      <span class="Record_Duration">{{ duration | toTime }}</span>
      <SvgIcon name="triangle" class="Record_IconStart" />
    </div>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import {
  IProjectState,
  ITimerState,
} from '@/store/types';
import ProjectManager from '@/store/modules/ProjectManager';
import RecordManager from '@/store/modules/RecordManager';

@Component
export default class Record extends Vue {
  @Prop({ required: true }) record!: ITimerState;

  private projectManager = ProjectManager;

  private recordManager = RecordManager;

  private get project(): IProjectState | undefined {
    return ProjectManager.getById(this.record.projectId);
  }

  private get duration(): number {
    return this.recordManager.getDurationById(this.record.id);
  }
}
</script>

<style lang="scss" scoped>
.Record {
  $heightSize: 64px;
  display: flex;
  height: $heightSize;
  padding: 14px 16px;
  margin-bottom: -2px;
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
    padding-bottom: 2px;
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

  &_Duration {
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
