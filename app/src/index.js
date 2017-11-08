import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CountDown from './CountDown';
import registerServiceWorker from './registerServiceWorker';
import './countDown.less';

ReactDOM.render(<CountDown />, document.getElementById('root'));
registerServiceWorker();
