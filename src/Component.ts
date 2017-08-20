import Vasific from './Vasific'

export default class Component<P, S> {
  protected state: S = {} as S;

  constructor(private props: P = {} as P) {
  }

  render(): string {
    return '';
  }

  setState(partOfState: Object): void {
    this.state = {...this.state as Object, ...partOfState} as S;  // Object.assign
    Vasific.render();
  }
}