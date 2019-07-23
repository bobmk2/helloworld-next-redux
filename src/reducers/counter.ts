import { handleActions } from 'redux-actions';
import { Counter } from '../actions/action-types';

const initialState = {
  isLoading: false,
  didValidate: false
};

export default handleActions(
  {
    [Counter.Start]: state => ({
      ...state,
      isLoading: true
    }),
    [Counter.Done]: (state, action) => ({
      ...state,
      isLoading: false,
      // @ts-ignore
      count: action.payload.count,
      error: undefined
    }),
    [Counter.Fail]: (state, action) => ({
      ...state,
      isLoading: false,
      // @ts-ignore
      error: action.payload.error
    })
  },
  initialState
);
