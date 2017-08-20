import { Action } from './Actions'
import Store from './Store';

/**
 * Takes care about updating state in Store base on action.
 */
export default class Reducer {
  private static reducers: Map<string, Reducer> = new Map();

  static reduceAll(state: any, action: Action): any {
    Array.from(Reducer.reducers)
      .map(([reducerKey, reducer]) => {
      return [reducerKey, reducer.reduce(state[reducerKey], action)]
    })
      .forEach(([reducerKey, reducer]) => {
        Store.state[reducerKey] = reducer;
      })
  }

  /**
   * Registers the reducer and creates storage for its state
   * @param {string} reducerKey unique key under which reducer will be stored
   */
  constructor(reducerKey: string) {
    Reducer.reducers.set(reducerKey, this);
  }


  reduce(state: any, action: Action): any {
    return state;
  }
}