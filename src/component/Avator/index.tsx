import React, { MouseEventHandler } from 'react';

interface AvatorProps {
  url: string;
  onClick?: MouseEventHandler;
  type?: string;
}

export default function Avator(props: AvatorProps) {
  const { url, onClick } = props;
  return <img src={url} onClick={onClick} className="xiyou-record-avator"/>
}