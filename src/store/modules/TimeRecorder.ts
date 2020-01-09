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

  public isActive: boolean = false;

  @Mutation
  public activate(payload: ITimerState): void {
    this.timerState = { ...payload };
    this.isActive = true;
  }

  @Mutation
  public deactivate(): void {
    this.timerState = { ...initialState };
    this.isActive = false;
  }

  // TODO: プロジェクト、タグ設定のミューテーションを書く

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('deactivate');
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
