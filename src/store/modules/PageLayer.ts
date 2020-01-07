import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import { IPageLayerState } from '@/store/types';
import store from '@/store';

@Module({
  name: 'PageLayer',
  namespaced: true,
  dynamic: true,
  store,
})
class PageLayer extends VuexModule implements IPageLayerState {
  public allPageLayerState: { [key:string]: Function[] } = {};

  public pageLayerState: Function[] = [];

  @Mutation
  public setPage(page: string): void {
    this.pageLayerState = this.allPageLayerState[page] || [];
  }

  @Mutation
  public push(component: Function): void {
    this.pageLayerState.push(component);
  }

  @Mutation
  public pop(): void {
    this.pageLayerState.pop();
  }
}

const pageLayer = getModule(PageLayer);

export default pageLayer;
