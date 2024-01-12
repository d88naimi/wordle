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
  const [guessList, setGuessList] = useState([]);

  return (
    <div>
      <UserForm
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
      />
      <Guess guessList={guessList} />
    </div>
  );
}

export default Game;
