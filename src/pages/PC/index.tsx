import React, { useState } from 'react';
import createRoutes from 'routes';
import Header from 'component/Header';
import { routesConfig as config} from 'utils/const'

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
      {routes}
    </div>
  )
}