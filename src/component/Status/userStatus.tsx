import React, { MouseEventHandler } from 'react';
import Avator from 'component/Avator';
import './index.less';

interface userStatusProps {
  avator?: string;
  username?: string;
  size: number;
  onAvatorClick?: MouseEventHandler;
}

export default function UserStatusItem(props: userStatusProps) {
  const { avator, size, username, onAvatorClick } = props;
  return (
    <div className="xiyou-record-status">
      <Avator url={avator} onClick={onAvatorClick} size={size}/>
      <p className="xiyou-record-username">{username}</p>
    </div>
  )
}