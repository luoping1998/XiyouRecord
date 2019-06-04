import React from 'react';
import Status from 'component/Status';
import Input from 'component/Input';
import Logo from 'component/Logo';
import { UserStatusType } from 'utils/const';

import './index.less';

interface HeaderProps {
  status: UserStatusType;
}

export default function Header(props: HeaderProps) {
  const { status } = props;
  return (
    <div className="xiyou-record-header">
      <div className="xiyou-record-header-inner">
        <Logo/>
        <Input />
        <Status status={status}/>
      </div>
    </div>
  )
}
