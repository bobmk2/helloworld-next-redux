import { useSelector, useDispatch } from 'react-redux';
import { fetchCount, incrementCount, decrementCount, resetCount } from '../src/actions/counter-action';
import { State } from '../src/types/states';
import { NextJSContext } from 'next-redux-wrapper';

type OwnProps = {
  initialCount?: number;
};

type PropTypes = OwnProps;

const IndexPage = (props: PropTypes) => {
  const counter = useSelector((state: State) => state.counter);
  const dispatch = useDispatch();

  async function handleClickIncrement() {
    await dispatch(incrementCount());
  }

  async function handleClickDecrement() {
    await dispatch(decrementCount());
  }

  async function handleClickReset() {
    await dispatch(resetCount());
  }

  async function handleClickFetch() {
    await dispatch(fetchCount());
  }

  return (
    <div>
      <h1>helloworld-next-redux</h1>
      <div>Initial count: {props.initialCount}</div>
      <div>Count: {counter.count}</div>
      <div>
        <button disabled={counter.isLoading} onClick={handleClickIncrement}>
          ++ Increment
        </button>
        <button disabled={counter.isLoading} onClick={handleClickDecrement}>
          -- Decrement
        </button>
      </div>
      <div>
        <button disabled={counter.isLoading} onClick={handleClickReset}>
          =0 Reset
        </button>
        <button disabled={counter.isLoading} onClick={handleClickFetch}>
          >> Fetch
        </button>
      </div>
      {counter.isLoading ? <h5>Loading...</h5> : null}
    </div>
  );
};

IndexPage.getInitialProps = async ({ store }: NextJSContext) => {
  await store.dispatch<any>(fetchCount());
  return { initialCount: store.getState().counter.count };
};

export default IndexPage;
