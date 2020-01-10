export interface IPropState {
  [key: string]: string | Function,
}

export interface IPageLayerState {
  allPageLayerState: {
    [page: string]: {
      component: Function,
      attributes?: IPropState,
      [key: string]: Function | IPropState | undefined
    }[],
  },
  pageLayerState: {
    component: Function,
    attributes?: IPropState,
    [key: string]: Function | IPropState | undefined
  }[],
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
  isActive: boolean,
}
