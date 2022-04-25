import React from 'react';
import { Layout } from '../components';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { store } from '../store/store';
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
  )
}

export default MyApp
