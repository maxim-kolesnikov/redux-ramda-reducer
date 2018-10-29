import { COUNTER_ACTIONS } from './constants';

export const increment = () => ({ type: COUNTER_ACTIONS.INCREMENT });

export const decrement = () => ({ type: COUNTER_ACTIONS.DECREMENT });

export const setValue = payload => ({ type: COUNTER_ACTIONS.SET_VALUE, payload });
