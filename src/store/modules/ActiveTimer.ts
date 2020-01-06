import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import {
  IActiveTimeState,
  IActiveTimerState,
} from '@/store/types';
import store from '@/store';

const initialState: IActiveTimeState = {
  startDatetime: '',
  endDatetime: '',
  projectId: '',
  tags: [],
};

@Module({
  name: 'ActiveTimer',
  namespaced: true,
  dynamic: true,
  store,
})
class ActiveTimer extends VuexModule implements IActiveTimerState {
  public activeTimeState: IActiveTimeState = { ...initialState };

  @Mutation
  public setStartDatetime(datetime: string): void {
    this.activeTimeState.startDatetime = datetime;
  }

  @Mutation
  public resetAll(): void {
    this.activeTimeState = { ...initialState };
  }

  // TODO: 終了時刻、プロジェクト、タグ設定のミューテーションを書く

  @Action
  public record() {
    // TODO: 記録する処理を書く
    this.context.commit('resetAll');
  }

  public get isActive(): boolean {
    return this.activeTimeState.startDatetime !== initialState.startDatetime;
  }
}

const ActiveTimerModule = getModule(ActiveTimer);

export default ActiveTimerModule;
