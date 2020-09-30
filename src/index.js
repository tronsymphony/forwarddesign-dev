import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

// let history = createBrowserHistory();

const history = createBrowserHistory();

ReactGA.initialize('UA-80037917-1');

// Initialize google analytics page view tracking
history.listen(({ location, action }) => {
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log(window.location.pathname)
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
