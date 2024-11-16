import { useState } from "react";


const GameBoardValues = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectPlayer, turns }) {
    // const [gameBoard, setGameBoard] = useState(GameBoardValues)
    let gameBoard = GameBoardValues
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((rowValues, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {rowValues.map((colValues, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectPlayer(rowIndex, colIndex)} disabled={colValues !== null}>{colValues}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
