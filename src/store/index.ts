import Vue from 'vue';
import Vuex from 'vuex';
import {
  ILoaderState,
  IPageLayerState,
  IProjectManagerState,
  IRecordManagerState,
  IReportManagerState,
  ITagManagerState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  loader: ILoaderState,
  pageLayer: IPageLayerState,
  projectManager: IProjectManagerState,
  recordManager: IRecordManagerState,
  reportManager: IReportManagerState,
  tagManager: ITagManagerState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
