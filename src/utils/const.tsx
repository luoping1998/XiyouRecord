import Login from 'pages/Login';
import UserInfo from 'pages/UserInfo';
import Home from 'pages/Home';

export const UserStatus = {
  ONLINE: 1,
  OFFLINE: 0
}

export type UserStatusType = 0 | 1;

export const MAIN_KEY = {
  FOLLOW: 0,
  PROCESS: 1
};

export const routesConfig = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'home'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/userinfo',
    component: UserInfo,
    name: 'userinfo'
  }
];