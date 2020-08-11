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
                    <Link to="/help"  className='header__title' activeClassName='is-active'>Help</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Header;