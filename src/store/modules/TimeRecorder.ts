import { each } from 'lodash';
import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import {
  ITimerState,
  ITimeRecorderState,
} from '@/store/types';
import RecordManager from './RecordManager';
import store from '@/store';

const initialTimerState: ITimerState = {
  title: null,
  startDatetime: null,
  endDatetime: null,
  projectId: RecordManager.noProjectId,
  tagIds: [],
};

@Module({
  name: 'TimeRecorder',
  namespaced: true,
  dynamic: true,
  store,
})
class TimeRecorder extends VuexModule implements ITimeRecorderState {
  public timerState: ITimerState = { ...initialTimerState };

  public tmpState: ITimerState = { ...initialTimerState };

  public isActive: boolean = true;

  @Mutation
  public activate(payload: ITimerState): void {
    this.timerState = { ...payload };
    this.isActive = true;
  }

  @Mutation
  public deactivate(): void {
    this.timerState = { ...initialTimerState };
    this.tmpState = { ...initialTimerState };
    this.isActive = false;
  }

  @Mutation
  public setState(payload: {
    type?: string,
    key: string,
    value: string | number | number[] | null,
  }): void {
    const state = (payload.type === 'tmp') ? this.tmpState : this.timerState;
    state[payload.key] = payload.value;
  }

  @Mutation
  public setStates(payload: {
    type?: string,
    values: ITimerState,
  }): void {
    each(payload.values, (value: (string | number | number[] | null), key: string) => {
      const state = (payload.type === 'tmp') ? this.tmpState : this.timerState;
      state[key] = value;
    });
  }

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('deactivate');
  }

  public get getState(): Function {
    return (params: { key: string, type?: string }): string | number | number[] | null => {
      const state = (params.type === 'tmp') ? this.tmpState : this.timerState;
      return state[params.key];
    };
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
