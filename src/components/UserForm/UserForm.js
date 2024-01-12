import React, { useState } from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function UserForm({ guessList, setGuessList, answer, setGameStatus }) {
  console.log("🚀 ~ guessList:", guessList.length);
  console.log("🚀 ~ NUM_OF_GUESSES_ALLOWED:", NUM_OF_GUESSES_ALLOWED);
  const [userGuess, setUserGuess] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      label: userGuess,
      id: Math.random(),
    };

    if (newItem.label === answer) {
      setGameStatus("won");
    } else if (guessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }

    const checkedGuess = checkGuess(newItem.label, answer);
    const nextItems = [...guessList, checkedGuess];
    setGuessList(nextItems);
    setUserGuess("");
  };

  const handleInputChange = (event) => {
    const enteredName = event.target.value;

    if (enteredName.length >= 0 && enteredName.length <= 5) {
      setUserGuess(enteredName.toUpperCase());
    }
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={userGuess}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default UserForm;
