import { createStore, applyMiddleware, compose } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { reducer } from '../reducers';
import { State } from '../types/states';
import { Actions } from '../types/actions/actions';

const composeEnhancers = compose;

export const initializeStore = (initialState: any) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware<ThunkDispatch<State, undefined, Actions>>(thunk), devToolsEnhancer({}))
  );
};
