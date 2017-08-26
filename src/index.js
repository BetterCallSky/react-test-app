/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import createStore from './store/createStore';

const store = createStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
