import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import 'assets/styles/index.less';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { unstable_HistoryRouter, HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({ window });
const Router =
  process.env.NODE_ENV === 'development' ? unstable_HistoryRouter : HashRouter;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL} history={history}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
