import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login/Login';
import Reg from './routes/Reg/Reg';
import Home from './routes/Home/Home';
import Me from './routes/Me/Me';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/reg" exact component={Reg} />
        <Route path="/me" exact component={Me} />
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
