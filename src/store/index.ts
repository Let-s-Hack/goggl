import Vue from 'vue';
import Vuex from 'vuex';
import {
  IBottomSheetBehaviorState,
  IPageLayerState,
  ILoaderState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  bottomSheetBehavior: IBottomSheetBehaviorState,
  pageLayer: IPageLayerState,
  loader: ILoaderState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
