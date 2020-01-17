import {
  Module,
  VuexModule,
  getModule,
} from 'vuex-module-decorators';
import { ITagManager } from '@/store/types';
import store from '@/store';

@Module({
  name: 'TagManager',
  namespaced: true,
  dynamic: true,
  store,
})
class TagManager extends VuexModule implements ITagManager {
  public tags: { id: number, name: string }[] = [
    { id: 1, name: '設計' },
    { id: 2, name: '実装' },
    { id: 3, name: 'レビュー' },
    { id: 4, name: '動作確認' },
  ];
}

const tagManager = getModule(TagManager);

export default tagManager;
