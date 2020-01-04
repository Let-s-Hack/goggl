export interface IBottomSheetState {
  timerCreator: boolean,
  timerEditor: boolean,
  projectSelector: boolean,
  tagsSelector: boolean,
  [key: string]: boolean,
}
  
export interface IBottomSheetBehaviorState {
  componentState: IBottomSheetState,
}

export interface ILoadingState {
  timer: boolean,
  reports: boolean,
  loadingBar: boolean,
  [key: string]: boolean,
}

export interface ILoaderState {
  status: ILoadingState,
}