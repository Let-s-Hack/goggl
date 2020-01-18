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
  projectId: number | null,
  tagIds: number[],
  [key: string]: string | number | number[] | null,
}

export interface ITimeRecorderState {
  timerState: ITimerState,
  tmpState: ITimerState,
  isActive: boolean,
}

export interface IProjectManagerState {
  projectState: {
    id: number,
    name: string,
    color: string,
  }[],
}

export interface ITagManagerState {
  tagState: { id: number, name: string }[],
}

export interface IRecordManagerState {
  recordState: ITimerState[],
}

export interface IReportState {
  startDate: string | null,
  endDate: string | null,
  total: number,
  billable: number,
  barGraph: { [date: string]: number },
  pieChart: { [projectId: number]: number },
}

export interface IReportManagerState {
  reportState: IReportState,
}
