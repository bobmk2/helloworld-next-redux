import React from 'react';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/store';
import { Provider } from 'react-redux';
import { Store } from 'redux';

type AppProps = {
  store: Store;
};

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(MyApp);
