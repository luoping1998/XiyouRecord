import React, { MouseEventHandler } from 'react';
import Button, { ButtonType } from 'component/Button';
import Avator from 'component/Avator';
import { UserStatus, UserStatusType } from 'utils/const';
import './index.less';

interface StatusProps {
  status: UserStatusType;
  avator?: string;
  username?: string;
  onAvatorClick?: MouseEventHandler;
  onLoginClick?: MouseEventHandler;
  onSignUpClick?: MouseEventHandler;
}

export default function Status(props: StatusProps) {
  const { status, avator, username, onAvatorClick, onLoginClick, onSignUpClick } = props;
  if (status === UserStatus.ONLINE) {
    return (
      <div className="xiyou-record-status">
        <Avator url={avator} onClick={onAvatorClick}/>
        <p className="xiyou-record-username">{username}</p>
      </div> 
    )
  }else {
    return (
      <div className="xiyou-record-status">
      <Button onClick={onLoginClick} type={ButtonType.DEFAULT}>登录</Button>
      <Button onClick={onSignUpClick} type={ButtonType.IMORTANT}>注册</Button>
    </div> 
    )
  }
}