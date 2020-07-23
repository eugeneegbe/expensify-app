import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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
      404 - <Link to='/'>Go home</Link>
  </div>
)

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName='is-active' exact={true}>Dashboard</NavLink>| 
      <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>| 
      <NavLink to="/edit" activeClassName='is-active'>Edit Expense</NavLink>| 
      <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
    </div>
  </div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={addExpensePage} />
      <Route path="/edit" component={editExpensePage} />
      <Route path="/help" component={helpPage} />
      <Route component={notFoundpPage} />
    </Switch>
    </div>
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
