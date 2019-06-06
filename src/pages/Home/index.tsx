import React, { useState } from 'react';
import Menu from 'component/Menu';
import Process from 'pages/Process';
import Follow from 'pages/Follow';
import { MAIN_KEY } from 'utils/const';
import './index.less';

export default function Home() {
  const [ key, setKey ] = useState(MAIN_KEY.FOLLOW);
  function handleChangeActive(val) {
    console.log(val);
    setKey(val);
  }

  const options = [
    {
      name: MAIN_KEY.FOLLOW,
      component: Follow,
      text: '关注'
    },
    {
      name: MAIN_KEY.PROCESS,
      component: Process,
      text: '正在进行中'
    }
  ];
  
  const activeClassName = "xiyou-record-active";

  return (
    <div className="xiyou-record-home">
      <div className="xiyou-record-home-inner">
        <Menu
          options={options}
          activeName={key}
          activeClassName={activeClassName}
          onChangeActive={handleChangeActive}
        />
      </div>
    </div>
  )
}