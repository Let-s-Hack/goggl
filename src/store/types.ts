export interface IPageLayerState {
  allPageLayerState: { [key: string]: Function[] },
  pageLayerState: Function[],
}

export interface ILoadingState {
  timer: boolean,
  reports: boolean,
  loadingBar: boolean,
  [key: string]: boolean,
}

export interface ILoaderState {
  loadingState: ILoadingState,
}

export interface ITimerState {
  startDatetime: string | null,
  projectId: string | null,
  tags: number[],
  [key: string]: string | number[] | null,
}

export interface ITimeRecorderState {
  timerState: ITimerState,
}
