import moment from 'moment';

export default class TimeCounter {
  public duration: number = 0;

  private delay: number = 1000;

  private intervalId: number | null = null;

  private startDatetime: string | null = null;

  constructor(startDatetime: string | null) {
    this.startDatetime = startDatetime;
  }

  public start(): void {
    this.intervalId = setInterval(() => {
      if (this.startDatetime === null) return;

      this.duration = moment().diff(moment(this.startDatetime), 'seconds');
    }, this.delay);
  }

  public stop(): void {
    if (this.intervalId === null) return;

    clearInterval(this.intervalId);
  }
}
