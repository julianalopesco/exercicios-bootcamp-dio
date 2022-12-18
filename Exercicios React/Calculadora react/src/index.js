import React from 'react';
import ReactDOM from 'react-dom'
import Calculator from './main/Calculator';

import './index.css';

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <h1>Calculator</h1>
        <Calculator />
    </div>,
    elemento);