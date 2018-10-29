import { createStore, combineReducers } from 'redux';

import counterReducer from './counter/reducer';

export const store = createStore(
  combineReducers({
    counter: counterReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function configureStore() {
  return {
    store,
  };
}
