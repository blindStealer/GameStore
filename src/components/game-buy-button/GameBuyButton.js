import React from 'react'
import Button from '../Button/Button'
import './GameBuyButton.css'

import { useDispatch, useSelector } from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'


const GameBuyButton = ({ game }) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)

    const isItemInCart = items.some(item => item.id === game.id)

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(setItemInCart(game))

        }
    }

    return (
        <div className='game-buy-button'>
            <span className='game-buy-price'>{game.price} руб </span>
            <Button onClick={handleClick}
                type={isItemInCart ? 'secondary' : 'primary'}>

                {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
            </Button>


        </div>
    )
}

export default GameBuyButton