import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserForm from "../UserForm/UserForm";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuess, setUserGuess] = useState("");
  const [guessList, setGuessList] = useState([]);

  console.log("🚀 ~ UserForm ~ guessList:", guessList);
  console.log("🚀 ~ Game ~ userGuess:", userGuess);
  console.log("test");

  return (
    <div>
      <UserForm
        userGuess={userGuess}
        setUserGuess={setUserGuess}
        guessList={guessList}
        setGuessList={setGuessList}
      />
      <Guess guessList={guessList} />
    </div>
  );
}

export default Game;
