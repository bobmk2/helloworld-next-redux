import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from '../states';
import { CounterAction } from './counter-action-type';
import { Action } from 'redux';

export type Actions = CounterAction;

export type MyThunkAction<R = any, A extends Action = Actions> = ThunkAction<Promise<R>, State, undefined, A>;
export type MyThunkDispatch = ThunkDispatch<State, undefined, Actions>;
