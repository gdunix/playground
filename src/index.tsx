import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as R from './reducers';
import './index.css';

const reducers = combineReducers(R);

const store = createStore(
  reducers,
  (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : (f: any) => f
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
