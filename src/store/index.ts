import Vue from 'vue';
import Vuex from 'vuex';
import {
  IBottomSheetBehaviorState,
  ILoaderState,
  IActiveTimerState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  bottomSheetBehavior: IBottomSheetBehaviorState,
  loader: ILoaderState,
  activeTimer: IActiveTimerState,
}

export default new Vuex.Store<IRootState>({});
