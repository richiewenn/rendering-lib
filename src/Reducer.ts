import { Action } from './Actions'
import Store from './Store';

/**
 * Takes care about updating state in Store base on action.
 */
export default class Reducer<State> {
  private static reducers: Map<string, Reducer<any>> = new Map();

  static reduceAll(state: any, action: Action): any {
    let stateClone = {...state};
    let newState = Array.from(Reducer.reducers)
      .map(([reducerKey, reducer]) => {
        return [reducerKey, reducer.reduce(state[reducerKey], action)]
      })
      .reduce((state, [reducerKey, statePart]) => {
        state[reducerKey] = statePart;
        return state;
      }, stateClone);
    return newState;
  }

  /**
   * Registers the reducer and creates storage for its state
   * @param {string} reducerKey unique key under which reducer will be stored
   * @param {State} defaultState default state
   */
  constructor(private reducerKey: string, defaultState: State) {
    Reducer.reducers.set(reducerKey, this);
    Store.state[reducerKey] = defaultState;
  }


  reduce(state: any, action: Action): any {
    return state;
  }

  get state(): State {
    return Store.state[this.reducerKey];
  }
}