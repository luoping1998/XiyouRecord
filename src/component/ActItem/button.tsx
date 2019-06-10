import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  text?: string;
  icon?: string;
  onClick?: MouseEventHandler;
}

export default function Button(props: ButtonProps) {
  const {onClick, text, icon} = props;
  return (
    <div className="xiyou-record-actitem-button" onClick={onClick}>
      { icon && <i className={icon} /> }
      { text && text }
    </div>
  );
}