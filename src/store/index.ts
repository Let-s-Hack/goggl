import Vue from 'vue';
import Vuex from 'vuex';
import {
  IPageLayerState,
  ILoaderState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  pageLayer: IPageLayerState,
  loader: ILoaderState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
