import moment from 'moment';

const ONE_SECOND: number = 1000;

export default class TimeCounter {
  private duration: number = 0;

  private intervalId: number | null = null;

  private startDatetime: string | null = null;

  constructor(startDatetime?: string | null) {
    if (typeof startDatetime === 'undefined') {
      this.startDatetime = moment().format('YYYY-MM-DD HH:mm:ss');

      return;
    }

    this.startDatetime = startDatetime;
  }

  public get getDuration(): number {
    return this.duration;
  }

  public start(): void {
    if (this.startDatetime === null) return;

    this.intervalId = setInterval(() => {
      this.duration = moment().diff(moment(this.startDatetime!), 'seconds');
    }, ONE_SECOND);
  }

  public stop(): void {
    if (this.intervalId === null) return;

    clearInterval(this.intervalId);
  }
}
