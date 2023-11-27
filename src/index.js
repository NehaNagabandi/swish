import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Compose from "./app/contexts/Compose";
import { store } from "./helpers";
import App from './app/app';
import TemplateContext from './app/contexts/TemplateContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<span></span>}>
    <Provider store={store}>
      <Compose
        components={[
          TemplateContext
        ]}>
        <App />
      </Compose>
    </Provider>
  </Suspense>
);
