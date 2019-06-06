import React, { EventHandler, ChangeEventHandler } from 'react';
import './index.less';

interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler;
}

export default function SearchInput(props: SearchInputProps) {
  const { value, onChange } = props;
  return (
    <div className="xiyou-record-search-input">
      <input placeholder="Search" value={value} onChange={onChange}/>
    </div>
  )
}