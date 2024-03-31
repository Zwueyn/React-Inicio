import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants.jsx'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { Square } from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx' 
import { saveGameFrom } from './logic/storage/index.js'
import { resetGameFrom } from './logic/storage/index.js'



function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameFrom()
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameFrom({board: newBoard, turn: newTurn})

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      } else if (checkEndGame(newBoard)) {
      setWinner(false)

    } 
  }

  return (
  <main className='board'>
    <h1>Juego del Gato</h1>
    <button onClick={resetGame}> Reiniciar Juego </button>
    <section className='game'>
      {
        board.map((square, index) => {
          return (
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>            
          )
      })
    }
    </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    <WinnerModal resetGame={resetGame} winner={winner}/>
  </main>
  )
}

export default App
