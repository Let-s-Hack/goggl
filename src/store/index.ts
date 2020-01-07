import Vue from 'vue';
import Vuex from 'vuex';
import {
  IPageLayerState,
  ILoaderState,
  ITimerState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  pageLayer: IPageLayerState,
  loader: ILoaderState,
  timer: ITimerState,
}

export default new Vuex.Store<IRootState>({});
