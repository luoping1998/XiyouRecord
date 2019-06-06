import React from 'react';
import UserStatusItem from 'component/Status/userStatus';
import ActCover from './cover';
import './index.less';

export interface ActItemProps {
  id: string;
  avator: string;
  username: string;
  startDate: string;
  likeCount: number;
  createTime: string;
  commentCount: number;
}

export default function ActItem(props: ActItemProps) {
  const { id, avator, username, startDate, createTime, likeCount, commentCount } = props;
  return (
    <div className="xiyou-record-actitem">
      <ActCover id={id} likeCount={likeCount} commentCount={commentCount} />
      <UserStatusItem size={35} avator={avator} username={username} />
      <div className="xiyou-record-actitem-details">
      </div>
    </div>
  )
}