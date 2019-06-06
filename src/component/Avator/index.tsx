import React, { MouseEventHandler } from 'react';

interface AvatorProps {
  url: string;
  size: number;
  type?: string;
  onClick?: MouseEventHandler;
}

export default function Avator(props: AvatorProps) {
  const { url, size, onClick } = props;
  return <img src={url} onClick={onClick} style={{width: size}} className="xiyou-record-avator"/>
}