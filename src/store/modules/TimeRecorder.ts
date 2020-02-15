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
  projectId: null,
  tagIds: [],
};

@Module({
  name: 'TimeRecorder',
  namespaced: true,
  dynamic: true,
  store,
})
class TimeRecorder extends VuexModule implements ITimeRecorderState {
  public isActive: boolean = false;

  public timerState: ITimerState = { ...initialTimerState };

  public tmpState: ITimerState = { ...initialTimerState };

  private readonly noProjectId: number = RecordManager.noProjectId;

  @Mutation
  public activate(payload: ITimerState): void {
    this.isActive = true;
    this.timerState = { ...payload };
  }

  @Mutation
  public deactivate(): void {
    this.isActive = false;
    this.timerState = { ...initialTimerState };
    this.tmpState = { ...initialTimerState };
  }

  @Mutation
  public setState(payload: {
    key: string,
    value: string | number | number[] | null,
    type?: string,
  }): void {
    const state = (payload.type === 'tmp') ? this.tmpState : this.timerState;
    state[payload.key] = payload.value;
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

  public get hasProject(): Function {
    return (projectId: number): boolean => projectId !== this.noProjectId;
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
