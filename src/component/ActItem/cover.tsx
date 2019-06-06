import React from 'react';
import './index.less';

interface ActCoverProps {
  id: string;
  likeCount: number;
  commentCount: number;
}

export default function ActCover(props: ActCoverProps) {
  return (
    <div className="xiyou-record-actcover">
      <div className="xiyou-record-like"></div>
      <div className="xiyou-record-comment"></div>
    </div>
  )
}