import React, { MouseEventHandler } from 'react';
import Avator from 'component/Avator';
import './index.less';

interface userStatusProps {
  avator?: string;
  username?: string;
  time?: string;
  size: number;
  onAvatorClick?: MouseEventHandler;
}

export default function UserStatusItem(props: userStatusProps) {
  const { avator, size, username, time, onAvatorClick } = props;
  return (
    <div className="xiyou-record-status">
      <Avator url={avator} onClick={onAvatorClick} size={size}/>
      <div className="xiyou-record-box">
        <p className="xiyou-record-username">{username}</p>
        { time && <p className="xiyou-record-time">{time}</p> }
      </div>
    </div>
  )
}