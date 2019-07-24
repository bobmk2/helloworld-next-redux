import { Action } from 'redux-actions';

export interface DoneCounterPayload {
  count: number;
}

export interface StartCounterAction extends Action<EmptyPayload> {}
export interface DoneCounterAction extends Action<DoneCounterPayload> {}
export interface FailCounterAction extends Action<FailPayload> {}

export type CounterPayload = DoneCounterPayload & EmptyPayload & FailPayload;
export type CounterAction = StartCounterAction & DoneCounterAction & FailCounterAction;
