import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import {
  IPropState,
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
  public allPageLayerState: {
    [page: string]: { [key: string]: Function | IPropState }[],
  } = {};

  public pageLayerState: { [key: string]: Function | IPropState }[] = [];

  @Mutation
  public setPage(page: string): void {
    this.pageLayerState = this.allPageLayerState[page] || [];
  }

  @Mutation
  public push(payload: { [key: string]: Function | IPropState }): void {
    this.pageLayerState.push({
      component: payload.component,
      attributes: payload.attributes,
    });
  }

  @Mutation
  public pop(): void {
    this.pageLayerState.pop();
  }
}

const pageLayer = getModule(PageLayer);

export default pageLayer;
