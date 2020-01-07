import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import { ITimeState, ITimerState } from '@/store/types';
import store from '@/store';

const initialState: ITimeState = {
  startDatetime: null,
  projectId: null,
  tags: [],
};

@Module({
  name: 'Timer',
  namespaced: true,
  dynamic: true,
  store,
})
class Timer extends VuexModule implements ITimerState {
  public timerState: ITimeState = { ...initialState };

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

const timer = getModule(Timer);

export default timer;
