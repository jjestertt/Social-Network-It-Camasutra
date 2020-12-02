import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    //If we use strict mode components render happened several times... why it happen?
     // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
     // </React.StrictMode>,
    document.getElementById('root')
);

