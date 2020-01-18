import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';
import {
  IReportState,
  IReportManagerState,
} from '@/store/types';
import store from '@/store';

// TODO: 一時的
const tmpState = {
  startDate: '2019-12-21',
  endDate: '2019-12-27',
  total: 19080,
  billable: 0,
  barGraph: {
    '2019-12-21': 4680,
    '2019-12-22': 4680,
    '2019-12-23': 3240,
    '2019-12-24': 3600,
    '2019-12-25': 1800,
    '2019-12-26': 0,
    '2019-12-27': 1080,
  },
  pieChart: {
    2: 11520,
    3: 1080,
    4: 4680,
    5: 1800,
  },
};

@Module({
  name: 'ReportManager',
  namespaced: true,
  dynamic: true,
  store,
})
class ReportManager extends VuexModule implements IReportManagerState {
  public reportState: IReportState = { ...tmpState };

  @Mutation
  public setState(payload: IReportState) {
    this.reportState = payload;
  }

  @Action
  public fetch(): boolean {
    // TODO: firebase処理
    const isSuccess = true;
    if (isSuccess) {
      this.context.commit('setState', tmpState);
      return true;
    }

    return false;
  }
}

const reportManager = getModule(ReportManager);

export default reportManager;
