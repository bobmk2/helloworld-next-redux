export interface CounterState {
  isLoading: boolean;
  didValidate: boolean;
  count?: number;
  error?: Error;
}
