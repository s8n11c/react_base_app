import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';

// material ui
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './app/assets/ui/themes/theme'
import App from './app/comeback/containers/index';
import mainReducer from './app/comeback/reducers';
import todoList from './app/todoList/reducers';
import daemoner from './app/websocket/reducers';

//middlewares
import {Bridge} from './app/comeback/middlewares';
import thunk from 'redux-thunk';
import {customAsync} from './app/websocket/middlewares'
//saga middleware
import createSagaMiddleware from "redux-saga";
import apiSaga from "./app/websocket/middlewares/sagas";
const initialiseSagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const reducers=combineReducers({todoList,mainReducer,daemoner});
const store = createStore(
    reducers,
    applyMiddleware(thunk, promise, logger,Bridge ,customAsync,initialiseSagaMiddleware)
);
initialiseSagaMiddleware.run(apiSaga)

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
