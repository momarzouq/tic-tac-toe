import { useState } from "react";
export default function Player({ initName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditeClick() {
    if (isEditing) {
      onChangeName(symbol, playerName); // Save the updated name when exiting edit mode
    }
    setIsEditing((editing) => !editing); // Toggle editing mode
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleEditeClick(); // When i click enter save name auto 
    }
  }
  const btnCaption = isEditing ? "Save" : "Edit";

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = 'Edit'
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // When i click enter save name auto 
      />
    );
    //let btnCaption = 'Save'
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditeClick}>{btnCaption}</button>
      </span>
    </li>
  );
}
