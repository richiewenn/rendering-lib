import Component from './Component';
import Reducer from './Reducer';



export function createContainer(componentType: new (props?: any) => Component<any, any>, recuderType: new () => Reducer<any>): new (props?: any) => Component<any, any> {
  return class Container extends Component<any, any> {
    private reducer: Reducer<any> = new recuderType();

    render(): string {
      return new componentType(this.reducer.state).render();
    }
  };
}