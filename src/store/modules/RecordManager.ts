import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import {
  ITimerState,
  IRecordManagerState,
} from '@/store/types';
import store from '@/store';

// TODO: firestoreの仮データ
const firestoreRecords: ITimerState[] = [
  {
    id: 1,
    startDatetime: '2020-01-18 11:46',
    endDatetime: '2020-01-18 13:46',
    projectId: 1,
    tags: [1],
  },
  {
    id: 2,
    startDatetime: '2020-01-18 13:46',
    endDatetime: '2020-01-18 16:46',
    projectId: 2,
    tags: [2, 3],
  },
  {
    id: 3,
    startDatetime: '2020-01-19 9:06',
    endDatetime: '2020-01-19 12:00',
    projectId: 3,
    tags: [4],
  },
  {
    id: 4,
    startDatetime: '2020-01-20 13:10',
    endDatetime: '2020-01-20 15:20',
    projectId: 4,
    tags: [1, 2],
  },
];

@Module({
  name: 'RecordManager',
  namespaced: true,
  dynamic: true,
  store,
})
class RecordManager extends VuexModule implements IRecordManagerState {
  public recordState: ITimerState[] = [];

  @Mutation
  public setRecord(payload: ITimerState[]): void {
    this.recordState = payload;
  }

  @Action
  public fetch(): void {
    // TODO: firestoreからRecordを取得する
    const records = firestoreRecords;
    this.context.commit('setRecord', records);
  }
}

const recordManager = getModule(RecordManager);

export default recordManager;
