import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import store from '@/store';

interface IComponentNames {
  timerCreator: boolean,
  timerEditor: boolean,
  projectSelector: boolean,
  tagsSelector: boolean,
  [key: string]: boolean,
}

export interface IBottomSheetBehaviorState {
  status: IComponentNames,
}

@Module({
  name: 'bottomSheetBehavior',
  namespaced: true,
  dynamic: true,
  store,
})
class BottomSheetBehavior extends VuexModule implements IBottomSheetBehaviorState {
  status: IComponentNames = {
    timerCreator: false,
    timerEditor: false,
    projectSelector: false,
    tagsSelector: false,
  };

  @Mutation
  public toggle(name: string) {
    this.status[name] = !this.status[name];
  }

  get isShow() {
    return (name: string) => this.status[name];
  }
}

export const bottomSheetBehavior = getModule(BottomSheetBehavior);
