require('react-hot-loader/patch');
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const render = () => {
    ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
}

render();
if (module.hot) {
    module.hot.accept(render);
    console.clear();
}