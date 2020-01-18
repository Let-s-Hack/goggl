import Vue from 'vue';
import Vuex from 'vuex';
import {
  ILoaderState,
  IPageLayerState,
  IProjectManagerState,
  IRecordManagerState,
  ITagManagerState,
  ITimeRecorderState,
} from './types';

Vue.use(Vuex);

export interface IRootState {
  loader: ILoaderState,
  pageLayer: IPageLayerState,
  projectManager: IProjectManagerState,
  recordManager: IRecordManagerState,
  tagManager: ITagManagerState,
  timeRecorder: ITimeRecorderState,
}

export default new Vuex.Store<IRootState>({});
