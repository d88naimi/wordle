import React, { useState } from "react";

function UserForm({ guessList, userGuess, setUserGuess, setGuessList }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      label: userGuess,
      id: Math.random(),
    };

    const nextItems = [...guessList, newItem];
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
