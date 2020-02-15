
import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';

const delay: number = 1000;

// 最大許容時間 999時間
const maxDuration: number = 60 * 60 * 999;

@Component
export default class DurationCounterMixin extends Vue {
  private duration: number | null = null;

  private timeoutId: number | null = null;

  beforeDestroy() {
    this.stop();
  }

  public start(startDatetime: string | null): void {
    if (startDatetime === null) return;
    if (this.duration !== null && this.duration > maxDuration) return;

    this.duration = moment().diff(moment(startDatetime), 'seconds');
    this.timeoutId = setTimeout(() => this.start(startDatetime), delay);
  }

  public stop(): void {
    if (this.timeoutId === null) return;

    clearTimeout(this.timeoutId);
  }
}
