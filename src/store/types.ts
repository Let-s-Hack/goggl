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