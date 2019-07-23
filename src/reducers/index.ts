import { combineReducers } from 'redux';
import CounterReducer from './counter';

export const reducer = combineReducers({
  counter: CounterReducer
});
