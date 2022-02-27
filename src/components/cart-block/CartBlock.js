import React, { useCallback, useState } from 'react'
import './cart-block.css'
import { BiCartAlt } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../utils/utils'
import CartMenu from '../cart-menu/CartMenu'
import ItemsInCart from '../items-in-cart/ItemsInCart'
import { useNavigate } from 'react-router-dom'

const CartBlock = () => {
    const navigate = useNavigate()
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)

    const toggleCartModal = () => {
        setIsCartMenuVisible(!isCartMenuVisible)
    }

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false)
        navigate('/order')
    }, [navigate])

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BiCartAlt className='cart-block__icon' onClick={toggleCartModal} />
            {totalPrice > 0 ? <span className='cart-block__total-price'>{totalPrice}</span> : null}
            {isCartMenuVisible ? <CartMenu items={items} onClick={handleClick} /> : null}
        </div>
    )
}

export default CartBlock