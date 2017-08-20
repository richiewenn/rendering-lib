import Reducer from './Reducer'
import { Action } from './Actions'
import Store from './Store'
import Vasific from './Vasific'

export default class Dispatcher {
  static dispatch(action: Action) {
    const state = Store.state;
    const newState = Reducer.reduceAll(state, action);

    // Just very simple check if rerendering the site is really necessary
    if(JSON.stringify(state) === JSON.stringify(newState)) {
      return;
    }
    Store.state = newState;
    Vasific.render();
  }
}