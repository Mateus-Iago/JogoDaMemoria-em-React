import { useEffect, useState } from 'react'
import './App.css'
import Gameover from './components/Gameover'
import Gameboard from './components/Gameboard'
import game from './game/game'

function App() {

  const [gameOver, setGameOver] = useState(false)
  const [cards, setCards] = useState([])

  useEffect(()=>{
      setCards(game.createCardsFromTechs())
  },[])

  function restart(){
    game.clearCards()
    setCards(game.createCardsFromTechs())
    setGameOver(false)
  }

  function handleFlip(card){
    game.flipCard(card.id, () => {
      setGameOver(true)
    }, () => {
      setCards([...game.cards])
    })
    setCards([...game.cards])
  }

      

  return(
    <div>
      <Gameboard handleFlip={handleFlip} cards={cards}></Gameboard>
      <Gameover show={gameOver} handleRestart={restart}></Gameover>
    </div>
  )

}

export default App
