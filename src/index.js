import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./setup/configureStore";
import {Provider} from "react-redux";
import {theme} from "./setup/muiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
