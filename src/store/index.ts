import Vue from 'vue';
import Vuex from 'vuex';
import {
  IBottomSheetBehaviorState,
  ILoaderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  bottomSheetBehavior: IBottomSheetBehaviorState,
  loader: ILoaderState,
}

export default new Vuex.Store<IRootState>({});
