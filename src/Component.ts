import Vasific from './Vasific'

export default class Component<P> {
  private state: Object = {};

  constructor(private props: P) {
    this.props = props || {};
  }

  render(): string {
    return '';
  }

  setState(partOfState: Object): void {
    this.state = {...this.state, ...partOfState};  // Object.assign
    Vasific.render();
  }
}