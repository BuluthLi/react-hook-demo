import { NavLink, withRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import LuYou from './route.js';
import InnerNum from './components/innernum/InnerNum';
import OuterNumLeft from './components/outernumleft/OuterNumLeft';
import OuterNumRight from './components/outernumright/OuterNumRight';
import './App.css';

function App(props) {
  /**
   * 提示
   * 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
   * 有时候，我们只想在 React 更新 DOM 之后运行一些额外的代码。比如发送网络请求，手动变更 DOM等，这就用的很舒服
   */
  useEffect(() => {
    console.log(props);
  })
  return (
    <div className="App">
      <div className="header">666666666</div>
      <NavLink to={{ pathname: '/index/', query: { day: '首页' } }} >Index</NavLink>
      <NavLink to={{ pathname: "/about", query: { day: 'about' } }}>About</NavLink>
      <NavLink to="/message">Message</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <LuYou></LuYou>
      <div>--------------------------------------------------------------------</div>
      <div>数据总览{props.count}</div>
      <div>--------------------------------------------------------------------</div>
      <div>页内计时器</div>
      <InnerNum></InnerNum>
      <div>--------------------------------------------------------------------</div>
      <div>分离计时器，数据共享</div>
      <div style={{ float: 'left' }}>
        <OuterNumLeft></OuterNumLeft>
      </div>
      <div style={{ float: 'right' }}>
        <OuterNumRight></OuterNumRight>
      </div>
    </div>
  );
}
//将state.num.count绑定到props
const mapStateToProps = (state) => {
  return {
    count: state.num.count
  }
};

export default withRouter(connect(mapStateToProps)(App));
