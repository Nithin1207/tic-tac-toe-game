import { useState } from "react";
import GameBoard from "./components/GameComponent";
import Header from "./components/header"
import Player_Details from "./components/Player_Details"
import './index.css';
import Log from "./components/log";
import TaskList from "./components/pratice";
import { WINNING_COMBINATIONS } from "./components/Winning_Comibinations";

function App() {
  const [gameturns, setGameTurns] = useState([])

  const [activePlayer, setActivePlayer] = useState("X")

  function handleSwitchPlayer(rowIndex, colIndex) {
    setActivePlayer((activePlayer) => activePlayer === "X" ? "O" : "X")
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }
      const updatedTurns =
        [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }
          , ...prevTurns];

      return updatedTurns;
    })

  }

  return (
    <>

      <Header />

      <main>
        <div id="game-container">

          <ol id="players" className="highlight-player" >
            <Player_Details player_name="Nithin" player_symbol="X" isActive={activePlayer === "X"} />
            <Player_Details player_name="kumar" player_symbol="O" isActive={activePlayer === "O"} />
          </ol >

          <GameBoard onSelectPlayer={handleSwitchPlayer} turns={gameturns} />

        </div >

      </main >
      <Log turns={gameturns} />

    </>
  )
}

export default App
