import Vue from 'vue';
import Vuex from 'vuex';
import {
  ILoaderState,
  IPageLayerState,
  IProjectManagerState,
  ITagManagerState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  loader: ILoaderState,
  pageLayer: IPageLayerState,
  projectManager: IProjectManagerState,
  tagManager: ITagManagerState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
