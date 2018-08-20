import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CalendarBase from './CalendarBase';

ReactDOM.render(<CalendarBase />, document.getElementById('root'));
registerServiceWorker();
