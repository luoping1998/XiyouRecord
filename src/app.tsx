import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import PC from './pages/PC';
import Mobile from './pages/Mobile';
import './index.less';

function App() {
  return (
    <div className="xiyou-record">
      <Router>
        <PC />
        <Mobile />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));