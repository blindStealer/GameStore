import React from 'react'
import Button from '../Button/Button'
import './GameBuyButton.css'

const GameBuyButton = ({ game }) => {
    return (
        <div className='game-buy-button'>
            <span className='game-buy-price'>{game.price} руб</span>
            <Button onClick={() => null} type={'primary'}>
                В корзину
            </Button>


        </div>
    )
}

export default GameBuyButton