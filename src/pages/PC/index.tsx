import React, { useState } from 'react';
import createRoutes from 'routes';
import Header from 'component/Header';
import { routesConfig as config} from 'utils/const'
import './index.less';

export default function PC() {
  const [ value, setValue ] = useState('');

  function onChangeValue(e) {
    const value = e.target.value;
    setValue(value);
  }
  const routes = createRoutes(config);
  return (
    <div className="xiyou-record-pc">
      <Header status={0} onChange={onChangeValue} value={value}/>
      <div className="xiyou-record-pc-inner">
        {routes}      
      </div>
    </div>
  )
}