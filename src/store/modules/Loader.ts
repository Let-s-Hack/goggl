import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import {
  ILoadingState,
  ILoaderState,
} from '@/store/types';
import store from '@/store';

@Module({
  name: 'Loader',
  namespaced: true,
  dynamic: true,
  store,
})
class Loader extends VuexModule implements ILoaderState {
  public loadingState: ILoadingState = {
    timer: true,
    reports: true,
    loadingBar: false,
  };

  @Mutation
  public activate(name: string): void {
    this.loadingState[name] = true;
  }

  @Mutation
  public deactivate(name: string): void {
    this.loadingState[name] = false;
  }

  public get isLoading(): Function {
    return (name: string): boolean => this.loadingState[name];
  }
}

const loader = getModule(Loader);

export default loader;
