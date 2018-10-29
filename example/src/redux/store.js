import { createStore, combineReducers } from 'redux';

import counterReducer from './counter/reducer';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);

export default function configureStore() {
  return {
    store,
  };
}
