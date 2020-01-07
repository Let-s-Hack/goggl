import {
  Module,
  VuexModule,
  Mutation,
  getModule,
} from 'vuex-module-decorators';
import {
  IBottomSheetState,
  IBottomSheetBehaviorState,
} from '@/store/types';
import store from '@/store';

@Module({
  name: 'BottomSheetBehavior',
  namespaced: true,
  dynamic: true,
  store,
})
class BottomSheetBehavior extends VuexModule implements IBottomSheetBehaviorState {
  public componentState: IBottomSheetState = {
    timerCreator: false,
    timerEditor: false,
    projectSelector: false,
    tagsSelector: false,
  };

  @Mutation
  public show(componentName: string): void {
    this.componentState[componentName] = true;
  }

  @Mutation
  public hide(componentName: string): void {
    this.componentState[componentName] = false;
  }

  public get isShown(): Function {
    return (componentName: string): boolean => this.componentState[componentName];
  }
}

const bottomSheetBehavior = getModule(BottomSheetBehavior);

export default bottomSheetBehavior;
