import React, { MouseEventHandler } from 'react';
import Button from 'component/Button';

interface CommitProps {
  type: string;
  text: string[];
  title: string;
  onClickOne: MouseEventHandler;
  onClickTwo: MouseEventHandler;
  onClose: MouseEventHandler;
}

export default function Commit(props: CommitProps) {
  const { onClickOne, onClickTwo, onClose } = props;
  return (
    <div className="xiyou-record-commit">
      <div className="xiyou-record-commit-inner">
        <div className="xiyou-record-commit-content"></div>
        <div className="xiyou-record-commit-btns">
          <Button onClick={onClickOne}>{}</Button>
          <Button onClick={onClickTwo}>{}</Button>
        </div>
      </div>
      <i className="xiyou-record-close" onClick={onClose}/>
    </div>
  )
}