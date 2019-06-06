import React from 'react';
import ActItem, { ActItemProps } from 'component/ActItem';
import avatorURL from 'images/logo.png';
import './index.less';

export default function Follow() {
  const item: ActItemProps = {
    id: '1',
    avator: avatorURL,
    username: 'username',
    startDate: '2019-9-8',
    createTime: '2019-9-4',
    likeCount: 12,
    commentCount: 10
  };

  return (
    <div className="xiyou-record-follow">
      <p>Follow</p>
      <ActItem {...item}/>
    </div>
  )
}