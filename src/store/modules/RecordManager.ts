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
    tagIds: [1],
  },
  {
    id: 2,
    startDatetime: '2020-01-18 13:46',
    endDatetime: '2020-01-18 16:46',
    projectId: 2,
    tagIds: [2, 3],
  },
  {
    id: 3,
    startDatetime: '2020-01-19 09:06',
    endDatetime: '2020-01-19 12:00',
    projectId: 3,
    tagIds: [4],
  },
  {
    id: 4,
    startDatetime: '2020-01-19 13:10',
    endDatetime: '2020-01-19 15:20',
    projectId: 4,
    tagIds: [1, 2],
  },
  {
    id: 5,
    startDatetime: '2020-01-18 09:46',
    endDatetime: '2020-01-18 10:46',
    projectId: 1,
    tagIds: [1],
  },
  {
    id: 6,
    startDatetime: '2020-01-19 16:40',
    endDatetime: '2020-01-19 17:36',
    projectId: 2,
    tagIds: [1, 2, 3],
  },
  {
    id: 7,
    startDatetime: '2020-01-19 19:20',
    endDatetime: '2020-01-19 20:00',
    projectId: 3,
    tagIds: [2, 3, 4],
  },
  {
    id: 8,
    startDatetime: '2020-01-20 18:10',
    endDatetime: '2020-01-20 19:20',
    projectId: 4,
    tagIds: [1, 2],
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
  public setState(payload: ITimerState[]): void {
    this.recordState = payload;
  }

  @Action
  public fetch(): boolean {
    // TODO: firestoreからRecordを取得する。try, catchで同期的に書く。
    const isSuccess = true;

    if (isSuccess) {
      const records = firestoreRecords;
      this.context.commit('setState', records);
      return true;
    }

    return false;
  }
}

const recordManager = getModule(RecordManager);

export default recordManager;
