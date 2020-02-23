import { find } from 'lodash';
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

@Module({
  name: 'ProjectManager',
  namespaced: true,
  dynamic: true,
  store,
})
class ProjectManager extends VuexModule implements IProjectManagerState {
  public readonly noProjectId: number = 1;

  // TODO: 一時的に仮データを初期値に置いている。あとで修正する。
  public projectState: IProjectState[] = [
    {
      id: 1,
      name: 'No Project',
      color: '#B2BCC1',
    },
    {
      id: 2,
      name: 'Finance',
      color: '#06AAF5',
    },
    {
      id: 3,
      name: 'CMS',
      color: '#F1C33F',
    },
    {
      id: 4,
      name: 'goggl',
      color: '#E20505',
    },
    {
      id: 5,
      name: 'LINE',
      color: '#4BC800',
    },
  ];

  public get existsProject(): Function {
    return (projectId: number): boolean => projectId !== this.noProjectId;
  }

  public get getById(): Function {
    return (id: number): IProjectState | undefined => find(this.projectState, { id });
  }
}

const projectManager = getModule(ProjectManager);

export default projectManager;
