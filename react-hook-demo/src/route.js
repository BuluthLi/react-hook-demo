import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Index from './components/index/Index';
import About from './components/about/About';
import Message from './components/message/Message';
import Dashboard from './components/dashboard/Dashboard';
function LuYou() {
    return (
        <div>
            <Route path='/index' component={Index} />
            <Route path='/about' component={About} />
            <Route path='/message' component={Message} />
            {/* <Route path='/' exact component={Index} /> */}
            {/* <Route path='/'  component={Index} /> */}
            <Route path='/dashboard' component={Dashboard} />
            <Redirect to="/dashboard" component={Dashboard} />

        </div>
    );
}
export default LuYou;