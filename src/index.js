import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import Main from './main';
import Store from './store';

/**
 * Entry Point For Webpack
 * React will attach itself to the div with id app
 * Provider is for Redux
 */

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={Store}>
        <Main />
    </Provider>, app);
