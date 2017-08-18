import Vasific from './Vasific'

type State = {

}

export default class Component<P, State> {
  private state: State = {};

  constructor(private props: P) {
    this.props = props || {};
  }

  render(): String {
    return '';
  }

  setState(partOfState: Object): void {
    this.state = {...this.state, ...partOfState};  // Object.assign
    Vasific.render();
  }
}