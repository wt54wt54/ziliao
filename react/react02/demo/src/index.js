import React from 'react';
// 引入react 对象
import ReactDOM from 'react-dom';
// 引入react-dom对象
import './index.css';
// 引入全局css
import App from './App';
// 引入组件

import * as serviceWorker from './serviceWorker';
// SPA MPA PWA(网页)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
