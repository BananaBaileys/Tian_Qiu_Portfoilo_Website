/* 
 index.js is where we connect react application to the DOM 
*/

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// this needs to be written every single time for a react application