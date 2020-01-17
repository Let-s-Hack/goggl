import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import { ITagManagerState } from '@/store/types';
import store from '@/store';

@Module({
  name: 'TagManager',
  namespaced: true,
  dynamic: true,
  store,
})
class TagManager extends VuexModule implements ITagManagerState {
  public tagState: { id: number, name: string }[] = [
    {
      id: 1,
      name: 'design',
    },
    {
      id: 2,
      name: 'develop',
    },
    {
      id: 3,
      name: 'review',
    },
    {
      id: 4,
      name: 'meeting',
    },
  ];
}

const tagManager = getModule(TagManager);

export default tagManager;
