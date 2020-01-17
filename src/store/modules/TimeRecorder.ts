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
import store from '@/store';

const initialTimerState: ITimerState = {
  startDatetime: null,
  endDatetime: null,
  projectId: null,
  tags: [],
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

  public isActive: boolean = false;

  @Mutation
  public activate(payload: ITimerState): void {
    this.timerState = { ...payload };
    this.isActive = true;
  }

  @Mutation
  public deactivate(): void {
    this.timerState = { ...initialTimerState };
    this.isActive = false;
  }

  @Mutation
  public setState(payload: {
    key: string,
    value: string | number[] | null,
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
    return (params: { key: string, type?: string }): string | number[] | null => {
      const state = (params.type === 'tmp') ? this.tmpState : this.timerState;
      return state[params.key];
    };
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
