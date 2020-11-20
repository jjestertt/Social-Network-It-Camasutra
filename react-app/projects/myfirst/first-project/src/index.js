import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/state";

//Функция отрисовки документа на странице
export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dispatch={store.dispatch.bind(store)}
                state={store.getState()}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);
