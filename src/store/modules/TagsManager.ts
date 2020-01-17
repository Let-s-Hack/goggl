import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import {
  ITagsState,
  ITagsManagerState,
} from '@/store/types';
import store from '@/store';

// TODO: initialStateを初期値にする
const initialState: ITagsState = [
  {
    id: 1,
    name: '設計',
  },
  {
    id: 2,
    name: '実装',
  },
  {
    id: 3,
    name: 'レビュー',
  },
  {
    id: 4,
    name: '振り返り',
  },
];

@Module({
  name: 'TagsManager',
  namespaced: true,
  dynamic: true,
  store,
})
class TagsManager extends VuexModule implements ITagsManagerState {
  public tagsState: ITagsState = { ...initialState };
}

const tagsManager = getModule(TagsManager);

export default tagsManager;
