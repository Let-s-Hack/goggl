import Vue from 'vue';
import Vuex from 'vuex';
import {
  IPageLayerState,
  ILoaderState,
  ITimeRecorderState,
  IProjectsManagerState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  pageLayer: IPageLayerState,
  loader: ILoaderState,
  projectsManager: IProjectsManagerState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
