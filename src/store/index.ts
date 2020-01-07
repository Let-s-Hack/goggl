import Vue from 'vue';
import Vuex from 'vuex';
import {
  IBottomSheetBehaviorState,
  ILoaderState,
  ITimerState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  bottomSheetBehavior: IBottomSheetBehaviorState,
  loader: ILoaderState,
  activeTimer: ITimerState,
}

export default new Vuex.Store<IRootState>({});
