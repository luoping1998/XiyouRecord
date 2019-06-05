import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import UserInfo from 'pages/UserInfo';

export default function XiyouRoutes() {
  const config = [
    {
      path: '/',
      redirect: '/home',
      component: Home,
      exact: true
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/userinfo',
      component: UserInfo
    }
  ]
  const routes = config.map(item => <Route path={item.path} redirect={item.redirect} component={item.component} exact={item.exact || false} />)
  
  return (
    <Fragment>
      {routes}
    </Fragment>
  );
}