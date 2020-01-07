import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import {
  ITimeRecordState,
  ITimeRecorderState,
} from '@/store/types';
import store from '@/store';

const initialState: ITimeRecordState = {
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
  public timeRecordState: ITimeRecordState = { ...initialState };

  @Mutation
  public setStartDatetime(datetime: string): void {
    this.timeRecordState.startDatetime = datetime;
  }

  @Mutation
  public reset(): void {
    this.timeRecordState = { ...initialState };
  }

  // TODO: プロジェクト、タグ設定のミューテーションを書く

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('reset');
  }

  public get isActive(): boolean {
    return this.timeRecordState.startDatetime !== null;
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
