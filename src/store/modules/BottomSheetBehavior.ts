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
  componentState: IComponentNames,
}

@Module({
  name: 'BottomSheetBehavior',
  namespaced: true,
  dynamic: true,
  store,
})
class BottomSheetBehavior extends VuexModule implements IBottomSheetBehaviorState {
  componentState: IComponentNames = {
    timerCreator: false,
    timerEditor: false,
    projectSelector: false,
    tagsSelector: false,
  };

  @Mutation
  public show(componentName: string) {
    this.componentState[componentName] = true;
  }

  @Mutation
  public hide(componentName: string) {
    this.componentState[componentName] = false;
  }

  get isShown() {
    return (componentName: string) => this.componentState[componentName];
  }
}

export const bottomSheetBehavior = getModule(BottomSheetBehavior);
