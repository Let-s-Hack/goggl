import Vue from 'vue';
import Vuex from 'vuex';
import {
  ILoaderState,
  IPageLayerState,
  IProjectManagerState,
  ITagManager,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  loader: ILoaderState,
  pageLayer: IPageLayerState,
  projectManager: IProjectManagerState,
  tagManager: ITagManager,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
