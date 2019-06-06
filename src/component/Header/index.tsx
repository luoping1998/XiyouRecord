import React, { ChangeEventHandler } from 'react';
import { Link } from 'react-router-dom';
import Status from 'component/Status';
import SearchInput from 'component/SearchInput';
import Logo from 'component/Logo';
import { UserStatusType } from 'utils/const';
import './index.less';

interface HeaderProps {
  status: UserStatusType;
  value: string;
  onChange: ChangeEventHandler;
}

export default function Header(props: HeaderProps) {
  const { status, value, onChange } = props;
  return (
    <div className="xiyou-record-header">
      <div className="xiyou-record-header-inner">
        <Link to="/"><Logo /></Link>
        <SearchInput value={value} onChange={onChange}/>
        <Status status={status}/>
      </div>
    </div>
  )
}
