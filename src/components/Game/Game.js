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
  const [gameStatus, setGameStatus] = useState("running");

  return (
    <div>
      <UserForm
        guessList={guessList}
        setGuessList={setGuessList}
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <Guess guessList={guessList} />

      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guessList.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div class="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

export default Game;
