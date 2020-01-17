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

const initialTimerState: ITimerState = {
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
  public timerState: ITimerState = { ...initialTimerState };

  public endDateTime: string = '';

  public startDateTime: string = '';

  public tmpEndDateTime: string = '';

  public tmpStartDateTime: string = '';

  public isActive: boolean = true;

  @Mutation
  public activate(payload: ITimerState): void {
    this.timerState = { ...payload };
    this.isActive = true;
  }

  @Mutation
  public deactivate(): void {
    this.timerState = { ...initialTimerState };
    this.isActive = false;
  }

  @Mutation
  public setEndDateTime(payload: { datetime: string, type?: string }): void {
    if (payload.type === 'tmp') {
      this.tmpEndDateTime = payload.datetime;
      return;
    }

    this.endDateTime = payload.datetime;
  }

  @Action
  public record(): void {
    // TODO: 記録する処理を書く
    this.context.commit('deactivate');
  }
}

const timeRecorder = getModule(TimeRecorder);

export default timeRecorder;
