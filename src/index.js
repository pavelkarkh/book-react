import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'material-components-web/dist/material-components-web.min.css';
import App from './app/App';
import reducer from './reducers'

const bookStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={bookStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);