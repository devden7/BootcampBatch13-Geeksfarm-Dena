import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
  reducer: { counter: counterReducer },
  composeWithDevTools,
});
