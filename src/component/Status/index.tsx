import React, { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonType } from 'component/Button';
import UserStatusItem from './userStatus';
import { UserStatus, UserStatusType } from 'utils/const';
import './index.less';

interface StatusProps {
  status: UserStatusType;
  avator?: string;
  username?: string;
  size?: number;
  onAvatorClick?: MouseEventHandler;
  onSignUpClick?: MouseEventHandler;
}

export default function Status(props: StatusProps) {
  const { status, avator, size, username, onAvatorClick, onSignUpClick } = props;
  if (status === UserStatus.ONLINE) {
    return <UserStatusItem size={size} avator={avator} username={username} onAvatorClick={onAvatorClick}/>
  }else {
    return (
      <div className="xiyou-record-status">
      <Link to="/login">
        <Button type={ButtonType.DEFAULT}>登录</Button>
      </Link>
      <Link to="/sign_up">
        <Button onClick={onSignUpClick} type={ButtonType.IMORTANT}>注册</Button>
      </Link>
    </div> 
    )
  }
}
