import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from '../reducers';

const composeEnhancers = compose;

export const initializeStore = (initialState: any) => {
  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk), devToolsEnhancer({})));
};
