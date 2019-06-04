import React from 'react';
import ReactDOM from 'react-dom';
import PC from './pages/PC';
import Mobile from './pages/Mobile';
import './index.less';

function App() {
  return (
    <div className="xiyou-record">
      <PC />
      <Mobile />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));