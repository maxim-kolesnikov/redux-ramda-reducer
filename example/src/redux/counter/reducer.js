import * as R from 'ramda';
import { createReducer } from 'redux-ramda-reducer';
import { COUNTER_ACTIONS } from './constants';

export const INITIAL_STATE = {
  value: 1,
};

const incrementHandler = () => R.pipe(
  R.evolve({ value: R.inc })
);

const decrementHandler = () => R.pipe(
  R.evolve({ value: R.dec })
);

const setValueHandler = ({ value }) => R.pipe(
  R.evolve({ value })
);

const subtractHandler =
  ({ value: b }) => // action
  (state) => // state
  R.pipe(
    R.evolve({ value: R.subtract(state.value, b) })
  )(state);

const HANDLERS = {
  [COUNTER_ACTIONS.SUBTRACT]: subtractHandler,
  [COUNTER_ACTIONS.SET_VALUE]: setValueHandler,
  [COUNTER_ACTIONS.INCREMENT]: incrementHandler,
  [COUNTER_ACTIONS.DECREMENT]: decrementHandler,
}

export default createReducer(INITIAL_STATE, HANDLERS);