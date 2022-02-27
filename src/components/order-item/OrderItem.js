import React from 'react'
import { useDispatch } from 'react-redux'
import GameCover from '../game-cover/GameCover'
import { MdDelete } from 'react-icons/md'
import './OrderItem.css'
import { deleteItemFromCart } from '../../redux/cart/reducer'
const OrderItem = ({ game }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }

    return (
        <div className='order-item'>
            <div className='order-item__cover'>
                <GameCover image={game.image} />
            </div>
            <div className='order-item__title'>
                <span> {game.title} </span>
            </div>
            <div className='order-item__price'>
                <span> {game.price} руб </span>
                <MdDelete
                    onClick={handleClick}
                    className={'order-item__delete-from-order'}
                    cursor={'pointer'}
                    size={40} />
            </div>
        </div>
    )
}

export default OrderItem