import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import {
  IProjectsState,
  IProjectsManagerState,
} from '@/store/types';
import store from '@/store';

// TODO: 一時的に仮データを初期値に置いている。あとで修正する。
const initialState: IProjectsState = [
  {
    id: 1,
    name: 'プロジェクトX',
    color: '#3F46E3',
  },
  {
    id: 2,
    name: 'プロジェクトY',
    color: '#3FE643',
  },
  {
    id: 3,
    name: 'プロジェクトZ',
    color: '#F346E3',
  },
  {
    id: 4,
    name: 'プロジェクトA',
    color: '#999',
  },
];

@Module({
  name: 'ProjectsManager',
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectsManager extends VuexModule implements IProjectsManagerState {
  public projectsState: IProjectsState = { ...initialState };
}

const projectsManager = getModule(ProjectsManager);

export default projectsManager;
