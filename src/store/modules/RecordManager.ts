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
    title: 'design goggl',
    startDatetime: '2020-01-18 11:46:12',
    endDatetime: '2020-01-18 13:46:34',
    projectId: 1,
    tagIds: [1],
  },
  {
    id: 2,
    title: 'develop goggl',
    startDatetime: '2020-01-18 13:46:43',
    endDatetime: '2020-01-18 16:46:23',
    projectId: 2,
    tagIds: [2, 3],
  },
  {
    id: 3,
    title: null,
    startDatetime: '2020-01-19 09:06:45',
    endDatetime: '2020-01-19 12:00:00',
    projectId: null,
    tagIds: [],
  },
  {
    id: 4,
    title: 'make components',
    startDatetime: '2020-01-19 13:10:12',
    endDatetime: '2020-01-19 15:20:47',
    projectId: 4,
    tagIds: [1, 2],
  },
  {
    id: 5,
    title: 'review',
    startDatetime: '2020-01-18 09:46:57',
    endDatetime: '2020-01-18 10:46:10',
    projectId: 1,
    tagIds: [1],
  },
  {
    id: 6,
    title: 'finance',
    startDatetime: '2020-01-19 16:40:44',
    endDatetime: '2020-01-19 17:36:35',
    projectId: 2,
    tagIds: [1, 2, 3],
  },
  {
    id: 7,
    title: 'wordpress',
    startDatetime: '2020-01-19 19:20:45',
    endDatetime: '2020-01-19 20:00:10',
    projectId: 3,
    tagIds: [2, 3, 4],
  },
  {
    id: 8,
    title: 'goggl',
    startDatetime: '2020-01-20 18:10:34',
    endDatetime: '2020-01-20 19:20:21',
    projectId: 4,
    tagIds: [1, 2],
  },
  {
    id: 9,
    title: 'develop goggl',
    startDatetime: '2020-01-18 19:10:34',
    endDatetime: '2020-01-18 21:20:21',
    projectId: 2,
    tagIds: [2, 3],
  },
  {
    id: 10,
    title: null,
    startDatetime: '2020-01-19 10:00:00',
    endDatetime: '2020-01-19 10:44:40',
    projectId: null,
    tagIds: [],
  },
];

@Module({
  name: 'RecordManager',
  namespaced: true,
  dynamic: true,
  store,
})
class RecordManager extends VuexModule implements IRecordManagerState {
  public recordState: ITimerState[] = firestoreRecords;

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
