import Vasific from './Vasific'

export default class Component {
  private state: Object = {};

  constructor(private props?: any) {
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