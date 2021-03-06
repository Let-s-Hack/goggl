import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import {
  IPageLayerComponentState,
  IPageLayerState,
} from '@/store/types';
import store from '@/store';

@Module({
  name: 'PageLayer',
  namespaced: true,
  dynamic: true,
  store,
})
class PageLayer extends VuexModule implements IPageLayerState {
  public allPageLayerState: { [page: string]: IPageLayerComponentState[] } = {};

  public pageLayerState: IPageLayerComponentState[] = [];

  @Mutation
  public setPage(page: string): void {
    this.pageLayerState = this.allPageLayerState[page] || [];
  }

  @Mutation
  public push(payload: IPageLayerComponentState): void {
    this.pageLayerState.push({
      component: payload.component,
      attributes: payload.attributes,
    });
  }

  @Mutation
  public pop(): void {
    this.pageLayerState.pop();
  }

  @Mutation
  public clear(): void {
    this.pageLayerState = [];
  }
}

const pageLayer = getModule(PageLayer);

export default pageLayer;
