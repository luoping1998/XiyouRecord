import React, { MouseEventHandler, ReactChildren } from 'react';
import './index.less';

export const ButtonType = {
  DEFAULT: 'default',
  IMORTANT: 'important',
  ERROR: 'error',
  LOADING: 'loading'
}

interface ButtonInterface {
  children: string | ReactChildren;
  classStyles?: string;
  type?: string;
  onClick: MouseEventHandler
}

export default function Button(props: ButtonInterface) {
  const {children, classStyles, type, onClick} = props;
  const cls = `xiyou-record-button xiyou-record-button-${type || 'default'} ${classStyles}`;
  return (
    <div className={cls} onClick={onClick}>{children}</div>
  )
}