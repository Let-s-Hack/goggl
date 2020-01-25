import { ITimerState } from '@/store/types';

export interface IPieChart {
  name: string,
  color: string,
  time: {
    percent: number,
    sum: string,
  }
}

export interface IRecordGroup {
  date: string,
  records: ITimerState[],
}
