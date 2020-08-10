import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <div className='header'>
            <div className='header-container'>
                <div className='header__content'>
                    <Link to="/" className='header__title' exact={true}>
                        <h1>Expensify</h1>
                    </Link>
                    <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
                </div>
            </div>
        </div>
    </div>
);

export default Header;