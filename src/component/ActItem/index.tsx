import React, { MouseEventHandler } from 'react';
import UserStatusItem from 'component/Status/userStatus';
import Details from './details';
import ActFooter from './footer';
import url from 'images/name.png';

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
  function hanldeTrans(e) {
    e.preventDefault();
  }

  function handleComment(e) {
    e.preventDefault();
  }

  function hanldeLike(e) {
    e.preventDefault();
  }

  const imgs = [url, url, url, url, url, url, url];
  return (
    <div className="xiyou-record-actitem">
      <UserStatusItem size={35} avator={avator} username={username} time={createTime}/>
      <Details text={'大家好，我们是西柚记。'} imgs={imgs}/>
      <ActFooter handleComment={handleComment} hanldeLike={hanldeLike} hanldeTrans={hanldeTrans} />
    </div>
  )
}
