import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';

const delay: number = 1000;

// 最大許容時間 999時間
const maxTime: number = 60 * 60 * 999;

@Component
export default class TimeCounterMixin extends Vue {
  private passedSeconds: number = 0;

  private intervalId: number | null = null;

  beforeDestroy() {
    this.stopTimer();
  }

  public startTimer(startDatetime: string | null): void {
    if (
      startDatetime === null
      || this.passedSeconds > maxTime
    ) return;

    this.passedSeconds = moment().diff(moment(startDatetime), 'seconds');
    this.intervalId = setTimeout(() => this.startTimer(startDatetime), delay);
  }

  public stopTimer(): void {
    if (this.intervalId === null) return;

    clearInterval(this.intervalId);
  }
}
