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

const initialState: ITimerState = {
  startDatetime: null,
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
  public timerState: ITimerState = { ...initialState };

  @Mutation
  public setStartDatetime(datetime: string): void {
    this.timerState.startDatetime = datetime;
  }

  @Mutation
  public reset(): void {
    this.timerState = { ...initialState };
  }

  // TODO: プロジェクト、タグ設定のミューテーションを書く

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('reset');
  }

  public get isActive(): boolean {
    return this.timerState.startDatetime !== null;
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
