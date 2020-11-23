import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


//Функция отрисовки документа на странице
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                    state={state}/>
            </Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() =>{
    rerenderEntireTree(store.getState());
});
