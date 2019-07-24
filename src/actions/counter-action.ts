import { ActionCreator, Dispatch } from 'redux';
import { StartCounterAction, FailCounterAction, DoneCounterAction } from '../types/actions/counter-action-type';
import { Counter } from './action-types';
import fetch from 'isomorphic-unfetch';
import { MyThunkAction } from '../types/actions/actions';
import {
  GetCounterResponse,
  PostCounterIncrementResponse,
  PostCounterDecrementResponse,
  PostCounterResetResponse
} from '../types/apis/counter-api';

const apiEndpoint = process.env.API_ENDPOINT;

const startFetchCounter: ActionCreator<StartCounterAction> = () => ({
  type: Counter.Start,
  payload: {}
});

const doneFetchCounter: ActionCreator<DoneCounterAction> = (count: number) => ({
  type: Counter.Done,
  payload: { count }
});

const failFetchCounter: ActionCreator<FailCounterAction> = (error: Error) => ({
  type: Counter.Fail,
  payload: { error }
});

export const fetchCount = (): MyThunkAction<void> => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchCounter());
    try {
      const response = await _fetchCount();
      dispatch(doneFetchCounter(response.count));
    } catch (error) {
      dispatch(failFetchCounter(error));
    }
  };
};

export const incrementCount = (): MyThunkAction<void> => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchCounter());
    try {
      const response = await _incrementCount();
      dispatch(doneFetchCounter(response.count));
    } catch (error) {
      dispatch(failFetchCounter(error));
    }
  };
};

export const decrementCount = (): MyThunkAction<void> => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchCounter());
    try {
      const response = await _decrementCount();
      dispatch(doneFetchCounter(response.count));
    } catch (error) {
      dispatch(failFetchCounter(error));
    }
  };
};

export const resetCount = (): MyThunkAction<void> => {
  return async (dispatch: Dispatch) => {
    dispatch(startFetchCounter());
    try {
      const response = await _resetCount();
      dispatch(doneFetchCounter(response.count));
    } catch (error) {
      dispatch(failFetchCounter(error));
    }
  };
};

async function _fetchCount(): Promise<GetCounterResponse> {
  const response = await fetch(`${apiEndpoint}/counter`);
  return response.json();
}

async function _incrementCount(): Promise<PostCounterIncrementResponse> {
  const options = {
    method: 'POST'
  };
  const response = await fetch(`${apiEndpoint}/counter/increment`, options);
  return response.json();
}

async function _decrementCount(): Promise<PostCounterDecrementResponse> {
  const options = {
    method: 'POST'
  };
  const response = await fetch(`${apiEndpoint}/counter/decrement`, options);
  return response.json();
}

async function _resetCount(): Promise<PostCounterResetResponse> {
  const options = {
    method: 'POST'
  };
  const response = await fetch(`${apiEndpoint}/counter/reset`, options);
  return response.json();
}
