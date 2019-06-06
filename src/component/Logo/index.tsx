import React from 'react';
import logoUrl from 'images/logo.png';
import nameUrl from 'images/name.png';
import './index.less';

export default function Logo() {
  return (
    <div className="xiyou-record-logo">
      <img className="xiyou-record-logo-img" src={logoUrl}/>
      <img className="xiyou-record-logo-name" src={nameUrl}/>
    </div>
  )
}