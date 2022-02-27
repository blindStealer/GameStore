import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setCurrentGame } from '../../redux/game/reducer'

import GameBuyButton from '../game-buy-button/GameBuyButton'
import GameCover from '../game-cover/GameCover'
import GameGenre from '../game-genre/GameGenre'

import './game-item.css'

const GameItem = ({ game }) => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))

        navigate(`/app/${game.title}`)
    }

    return (
        <div className='game-item' onClick={handleClick} >
            <GameCover image={game.image} />
            <div className='game-item__details'>
                <div className='game-item-title'>
                    {game.title}
                </div>
                <div className='game-item-genre' >
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