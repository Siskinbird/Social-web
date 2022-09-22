import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Ivan'},
  {id: 2, name: 'Zubr'},
  {id: 3, name: 'Olya'},
  {id: 4, name: 'Dima'},
  {id: 5, name: 'Sveta'},
  {id: 6, name: 'Katya'} 
];

let messages = [
  {id: 1, message: 'Hello world'},
  {id: 2, message: 'War is coming'},
  {id: 3, message: 'Check you document'},
  {id: 4, message: 'Go off you contry'},
  {id: 5, message: 'Stay away'},
  {id: 6, message: 'Run'} 
];

let posts = [
  {id: 1, message: "Hellow its my first post", likesCount: 17},
  {id: 2, message: 'Hello wi all dieng', likesCount: 21},
  {id: 3, message: 'In this fucking world war', likesCount: 11},
  {id: 4, message: 'Russia come', likesCount: 44},
  {id: 5, message: 'Run', likesCount: 98},
  {id: 6, message: 'Away', likesCount: 113} 
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
