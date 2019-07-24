import { handleActions } from 'redux-actions';
import { Counter } from '../actions/action-types';
import { CounterPayload, DoneCounterAction, FailCounterAction } from '../types/actions/counter-action-type';
import { CounterState } from '../types/states/counter-state-type';

const initialState: CounterState = {
  isLoading: false,
  didValidate: false
};

export default handleActions<CounterState, CounterPayload>(
  {
    [Counter.Start]: (state): CounterState => ({
      ...state,
      isLoading: true
    }),
    [Counter.Done]: (state, action: DoneCounterAction): CounterState => ({
      ...state,
      isLoading: false,
      count: action.payload.count,
      error: undefined
    }),
    [Counter.Fail]: (state, action: FailCounterAction): CounterState => ({
      ...state,
      isLoading: false,
      error: action.payload.error
    })
  },
  initialState
);
