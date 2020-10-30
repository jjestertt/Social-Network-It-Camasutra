import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, name: "Макс" },
    {id: 2, name: "Саша" },
    {id: 3, name: "Лера" },
    {id: 4, name: "Инокентий" },
    {id: 5, name: "Днепро" },
]; //Массив диалогов
let messages = [
    {id: 1,message:"Привет как дела?"},
    {id: 2,message:"Давай дружить"},
    {id: 3,message:"Водку пить"},
    {id: 4,message:"Ыть"},
]; //Массив сообщений
const posts = [
    {id: 1, userName: "Сивак Максим", likeCounter: 15, postText: "Welcome to Vtantante"  },
    {id: 2, userName: "Сивак Максим", likeCounter: 33, postText: "Это моя вторая запись" },
    {id: 3, userName: "Сивак Максим", likeCounter: 11, postText: "I realy hope you like it" },
    {id: 4, userName: "Сивак Максим", likeCounter: 88, postText: "LOLOLO" },
]; //Массив записей на стене


ReactDOM.render(
  <React.StrictMode>
    <App
        dialogs={dialogs}
        messages={messages}
        posts={posts}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
