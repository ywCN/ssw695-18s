/**
 * Note: This project is cursed because backend people had limited experience in backend.
 * They do not aggregate data in the backend but expect frontend to do the aggregation. This is not a good practice.
 * Please do not follow the design of the actions and reducers.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/es/integration/react';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';
import configureStore from './store/configureStore';

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
