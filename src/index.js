import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/store';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>, document.getElementById('root'));


serviceWorker.register();
