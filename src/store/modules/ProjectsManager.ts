import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import {
  IProjectState,
  IProjectManagerState,
} from '@/store/types';
import store from '@/store';

// TODO: 一時的に仮データを初期値に置いている。あとで修正する。
const initialState: IProjectState = [
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
  name: 'ProjectManager',
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectManager extends VuexModule implements IProjectManagerState {
  public projectState: IProjectState = { ...initialState };
}

const projectManager = getModule(ProjectManager);

export default projectManager;
