
# redux-ramda-reducer
[![npm version](https://badge.fury.io/js/redux-ramda-reducer.svg)](https://badge.fury.io/js/redux-ramda-reducer)
[![npm](https://img.shields.io/npm/dt/redux-ramda-reducer.svg)](https://npmcharts.com/compare/redux-ramda-reducer?minimal=true)
[![Build Status](https://travis-ci.org/maxim-kolesnikov/redux-ramda-reducer.svg?branch=master)](https://travis-ci.org/maxim-kolesnikov/redux-ramda-reducer)
[![dependencies](https://david-dm.org/maxim-kolesnikov/redux-ramda-reducer.svg)](https://david-dm.org/maxim-kolesnikov/redux-ramda-reducer)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/maxim-kolesnikov/redux-ramda-reducer/blob/master/LICENSE.md)

Simple `createReducer` in functional style for Ramda library.

## Installation
```bash
  npm install redux-ramda-reducer
```

## Reducer with redux library

```javascript
  export default (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
```

## Reducer with redux-ramda-reducer

Without STATE in handler arguments 

```javascript
import * as R from 'ramda';
import { createReducer } from 'redux-ramda-reducer';
import { COUNTER_ACTIONS } from './constants';

const INITIAL_STATE = {
  value: 1,
};

const incrementHandler = () => R.evolve({ value: R.inc });

const decrementHandler = () => R.evolve({ value: R.dec });

const setValueHandler = ({ value }) => R.assoc('value', value);

const HANDLERS = {
  [COUNTER_ACTIONS.SET_VALUE]: setValueHandler,
  [COUNTER_ACTIONS.INCREMENT]: incrementHandler,
  [COUNTER_ACTIONS.DECREMENT]: decrementHandler,
}

export default createReducer(INITIAL_STATE, HANDLERS);
```

If you need STATE in handler:

```javascript
...

const setSameValueHandler = () => (state) => R.assoc('value', state.value)(state);

const HANDLERS = {
  [COUNTER_ACTIONS.SET_SAME_VALUE]: setSameValueHandler,
}

export default createReducer(INITIAL_STATE, HANDLERS);
```

### License
This module is [MIT licensed](./LICENSE.md).
