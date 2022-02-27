import React from 'react'
import './game-cover.css'


const GameCover = ({ image }) => {
    return (
        <div className='game-cover' >
            <img src={image} alt="game" className='game-cover__img' />
        </div>
    )
}

export default GameCover