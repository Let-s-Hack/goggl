import Vue from 'vue';
import Vuex from 'vuex';
import {
  ILoaderState,
  IPageLayerState,
  IProjectManagerState,
  IReportManagerState,
  ITagManagerState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  loader: ILoaderState,
  pageLayer: IPageLayerState,
  projectManager: IProjectManagerState,
  reportManager: IReportManagerState,
  tagManager: ITagManagerState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
