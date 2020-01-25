import { ITimerState } from '@/store/types';

export interface IRecordGroup {
  date: string,
  records: ITimerState[],
}
