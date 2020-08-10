import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <div className='header'>
            <Link to="/" className='header__title' exact={true}>
                <h1>Expensify</h1>
            </Link>
            <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
        </div>
    </div>
);

export default Header;