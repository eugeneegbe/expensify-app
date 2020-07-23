import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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

const AppRouter = () => (
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
);

export default AppRouter;