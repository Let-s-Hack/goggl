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
    name: 'design goggl',
    startDatetime: '2020-01-18 11:46:12',
    endDatetime: '2020-01-18 13:46:34',
    projectId: 1,
    tagIds: [1],
  },
  {
    id: 2,
    name: 'develop goggl',
    startDatetime: '2020-01-18 13:46:43',
    endDatetime: '2020-01-18 16:46:23',
    projectId: 2,
    tagIds: [2, 3],
  },
  {
    id: 3,
    name: null,
    startDatetime: '2020-01-19 09:06:45',
    endDatetime: '2020-01-19 12:00:00',
    projectId: null,
    tagIds: [],
  },
  {
    id: 4,
    name: 'make components',
    startDatetime: '2020-01-19 13:10:12',
    endDatetime: '2020-01-19 15:20:47',
    projectId: 4,
    tagIds: [1, 2],
  },
  {
    id: 5,
    name: 'review',
    startDatetime: '2020-01-18 09:46:57',
    endDatetime: '2020-01-18 10:46:10',
    projectId: 1,
    tagIds: [1],
  },
  {
    id: 6,
    name: 'finance',
    startDatetime: '2020-01-19 16:40:44',
    endDatetime: '2020-01-19 17:36:35',
    projectId: 2,
    tagIds: [1, 2, 3],
  },
  {
    id: 7,
    name: 'wordpress',
    startDatetime: '2020-01-19 19:20:45',
    endDatetime: '2020-01-19 20:00:10',
    projectId: 3,
    tagIds: [2, 3, 4],
  },
  {
    id: 8,
    name: ' goggl',
    startDatetime: '2020-01-20 18:10:34',
    endDatetime: '2020-01-20 19:20:21',
    projectId: 4,
    tagIds: [1, 2],
  },
  {
    id: 9,
    name: 'develop goggl',
    startDatetime: '2020-01-18 19:10:34',
    endDatetime: '2020-01-18 21:20:21',
    projectId: 2,
    tagIds: [2, 3],
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
