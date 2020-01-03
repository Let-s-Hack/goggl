import Vue from 'vue';
import Vuex from 'vuex';
import { IBottomSheetBehaviorState } from '@/store/modules/BottomSheetBehavior';

Vue.use(Vuex);

export interface IRootState {
  bottomSheetBehavior: IBottomSheetBehaviorState,
}

export default new Vuex.Store<IRootState>({});
