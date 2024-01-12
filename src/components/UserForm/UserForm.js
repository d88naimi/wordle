import React, { useState } from "react";
import { checkGuess } from "../../game-helpers";

function UserForm({
  guessList,

  setGuessList,
  answer,
}) {
  const [userGuess, setUserGuess] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      label: userGuess,
      id: Math.random(),
    };

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
    <form class="guess-input-wrapper" onSubmit={handleFormSubmit}>
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
