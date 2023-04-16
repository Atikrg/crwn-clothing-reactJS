import React from 'react';
import { render } from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/cart.context';
import {Elements} from '@stripe/react-stripe-js';
import {stripePromise} from './utils/stripe/stripe.utils';
import {store} from './store/store';

const rootElement = document.getElementById('root');
render(
  <React.StrictMode>
  <Provider store = {store}>
    <BrowserRouter>
          <CartProvider>
          <Elements stripe = {stripePromise}>
            <App />
          </Elements>
          </CartProvider>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  rootElement
);

