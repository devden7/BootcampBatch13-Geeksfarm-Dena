const redux = require('redux');

const rootReducer = (currentState = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentState + 1;
    case 'DECREMENT':
      return currentState - 1;
    default:
      return currentState;
  }
};

const store = redux.createStore(rootReducer);
console.log('state before increment = ', store.getState());
store.dispatch({ type: 'INCREMENT' });
console.log('state after increment = ', store.getState());
