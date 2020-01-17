export interface IPageLayerPropState {
  [key: string]: string | Function,
}

export interface IPageLayerComponentState {
  component: Function,
  attributes?: IPageLayerPropState,
  [key: string]: Function | IPageLayerPropState | undefined,
}

export interface IPageLayerState {
  allPageLayerState: { [page: string]: IPageLayerComponentState[] },
  pageLayerState: IPageLayerComponentState[],
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
  endDatetime: string | null,
  projectId: string | null,
  tags: number[],
  [key: string]: string | number[] | null,
}

export interface ITimeRecorderState {
  timerState: ITimerState,
  tmpState: ITimerState,
  isActive: boolean,
}
