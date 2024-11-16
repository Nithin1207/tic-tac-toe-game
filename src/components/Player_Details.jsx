import React, { useState } from "react";



export default function Player_Details({ player_name, player_symbol,
    isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [PlayerName, setPlayerName] = useState(player_name)


    let personName = <span className="player-name">{PlayerName}</span>
    if (isEditing) {
        personName = <input type="text" defaultValue={PlayerName} onChange={changePlayerName} />
    }

    function handleEditClick() {
        setIsEditing((editable) => !isEditing)
    }

    function changePlayerName(event) {

        setPlayerName(event.target.value)
    }

    return (

        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {personName}
                <span className="player-symbol">{player_symbol}</span>
            </span>
            <button onClick={handleEditClick} >{isEditing ? "Save" : "Edit"}</button>
        </li>


    );
}
