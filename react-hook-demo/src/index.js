// 路由控制跳转使用HashRouter，全局状态管理使用redux;局部数据，函数式组件内部state使用hook
// 相关的代码详见react-redux-react-router-example项目
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from "react-router-dom";

// 状态store
import store from './redux/store';
import { Provider } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
