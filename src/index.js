import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';

// material ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './app/assets/ui/themes/theme'
import App from './app/comeback/containers/index';
import mainReducer from './app/comeback/reducers';

const logger = createLogger();

const reducers=combineReducers({mainReducer});
const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
