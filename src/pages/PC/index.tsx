import React from 'react';
import XiyouRoutes from 'routes';
import Header from 'component/Header';

export default function PC() {
  return (
    <div className="xiyou-record-pc">
      <Header status={0} />
        <XiyouRoutes/>
    </div>
  )
}