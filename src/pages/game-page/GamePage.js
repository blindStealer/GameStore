import React from 'react'
import { useSelector } from 'react-redux'
import GameBuyButton from '../../components/game-buy-button/GameBuyButton'
import GameCover from '../../components/game-cover/GameCover'
import GameGenre from '../../components/game-genre/GameGenre'
import './GamePage.css'

const GamePage = () => {

    const game = useSelector(state => state.game.currentGame)
    console.log(game)
    if (!game) return null

    return (
        <div className='game-page'>
            <h1 className="game-page__title">{game.title}</h1>
            <div className="game-page__content">
                {/* <div className='game-page__popular-marks'>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}
                </div> */}
                <div className='game-page__right'>
                    <GameCover image={game.image} />
                    <p className='game-page__description'>{game.description}</p>

                </div>


                <div className="game-page__buy-game">
                    <span className='game-page__add-in-cart'>Добавляйте товары в корзину</span>
                    <GameBuyButton game={game} />

                </div>

                <div className="game-page__left">
                    <iframe
                        width={'100%'}
                        height={'1000px'}
                        src={game.video}
                        title='Youtube Video Player'
                        frameBorder={0}
                    ></iframe>
                </div>

            </div>
        </div>
    )
}

export default GamePage



// <div className='game-page'>
// <h1 className="game-page__title">{game.title}</h1>
// <div className="game-page__content">

//     <div className="game-page__left">
//         <iframe
//             width={'100%'}
//             height={'500px'}
//             src={game.video}
//             title='Youtube Video Player'
//             frameBorder={0}
//         ></iframe>
//     </div>
//     <div className="game-page__buy-game">
//         <span className='game-page__add-in-cart'>Добавить в корзину</span>
//         <GameBuyButton game={game} />

//     </div>
//     <div className='game-page__right'>
//         <GameCover image={game.image} />
//         <p>{game.description}</p>
//         <p className='secondary-text'>Популярные метки этого продукта:</p>
//         {game.genres.map((genre) => <GameGenre genre={genre} key={genre} />)}

//     </div>
// </div>
// </div>