import { connect } from 'react-redux';

const mapStoreStateToProps = (state: any) => {
  return {
    count: state.counter.count
  };
};

const IndexPage = (props: any) => {
  return (
    <div>
      <h1>nextjs-redux-ssr</h1>
      {props.propsCount} /{props.count}
    </div>
  );
};

IndexPage.getInitialProps = async ({ store, isServer }: { store: any; isServer: boolean }) => {
  console.log('store: ', store);
  console.log('isServer: ', isServer);
  store.dispatch({ type: 'success increment counter', payload: { count: 1000 } });
  return { propsCount: 123 };
};

export default connect(mapStoreStateToProps)(IndexPage);
