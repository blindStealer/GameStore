import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBlock from '../cart-block/CartBlock'
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <NavLink to={'/'} className={'header-store-title'}>
                    <h1>GAME STORE</h1>
                </NavLink>
            </div>
            <div className='wrapper header__cart-btn-wrapper'>
                <CartBlock />
            </div>
        </div>

    )
}

export default Header