import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const ExpenseDashboardPage = () => (
  <div>
      Dashboard
  </div>
)

const addExpensePage = () => (
  <div>
      Create a new expense
  </div>
)

const editExpensePage = () => (
  <div>
      Edit expense
  </div>
)

const helpPage = () => (
  <div>
      Help Page
  </div>
)

const notFoundpPage = () => (
  <div>
      404!
  </div>
)

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={addExpensePage} />
      <Route path="/edit" component={editExpensePage} />
      <Route path="/help" component={helpPage} />
      <Route component={notFoundpPage} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
