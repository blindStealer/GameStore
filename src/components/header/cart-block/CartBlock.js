import React from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'


const CartBlock = () => {
    return (
        <div className='cart-block'>
            <BiCartAlt className='cart-block__icon' />
            <span className='cart-block__total-price'>2313 руб.</span>
        </div>
    )
}

export default CartBlock