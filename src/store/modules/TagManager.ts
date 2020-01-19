import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import {
  ITagState,
  ITagManagerState,
} from '@/store/types';
import store from '@/store';

@Module({
  name: 'TagManager',
  namespaced: true,
  dynamic: true,
  store,
})
class TagManager extends VuexModule implements ITagManagerState {
  public tagState: ITagState[] = [
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

  public get getByIds(): Function {
    return (ids: number[]): ITagState[] => (
      this.tagState.filter((tag: ITagState) => ids.includes(tag.id))
    );
  }
}

const tagManager = getModule(TagManager);

export default tagManager;
