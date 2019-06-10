
import React, { MouseEventHandler } from 'react';
import Button from './button';

interface FooterProps {
  onClick?: MouseEventHandler
}

export default function ActFooter(props) {
  const {hanldeTrans, handleComment, hanldeLike} = props;
  return (
    <div className="xiyou-record-actitem-footer">
      <Button text={"转发"} onClick={hanldeTrans}/>
      <Button text={"评论"} onClick={handleComment}/>
      <Button text={"点赞"} onClick={hanldeLike}/>
    </div>
  )
}
