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
  isActive: false,
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
  public activate(payload: ITimerState): void {
    this.timerState = { ...payload };
  }

  @Mutation
  public deactivate(): void {
    this.timerState = { ...initialState };
  }

  // TODO: プロジェクト、タグ設定のミューテーションを書く

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('deactivate');
  }

  public get isActive(): boolean {
    return this.timerState.isActive;
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
