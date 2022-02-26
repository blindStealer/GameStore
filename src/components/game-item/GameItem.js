import React from 'react'
import GameBuyButton from '../game-buy-button/GameBuyButton'
import GameCover from '../game-cover/GameCover'
import GameGenre from '../game-genre/GameGenre'
import './game-item.css'

const GameItem = ({ game }) => {

    return (
        <div className='game-item'>
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <div className='game-item-title'>
                    {game.title}
                </div>
                <div className='game-item-genre'>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}

                </div>
                <div className='game-item__buy'>
                    <GameBuyButton game={game} />
                </div>
            </div>
        </div>
    )
}

export default GameItem