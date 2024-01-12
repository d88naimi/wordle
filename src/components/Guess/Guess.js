import React from "react";
import { range } from "../../utils";

function Guess({ guessList }) {
  const renderLetterCell = (letterObj, letterIndex) => {
    const statusClass =
      letterObj && letterObj.status ? letterObj.status : "incorrect";
    return (
      <span className={`cell ${statusClass}`} key={letterIndex}>
        {letterObj && letterObj.letter ? letterObj.letter : ""}
      </span>
    );
  };

  const renderGuessRow = (guess, index) => {
    return (
      <p className="guess" key={index}>
        {guess.map((letterObj, letterIndex) =>
          renderLetterCell(letterObj, letterIndex)
        )}
      </p>
    );
  };

  return (
    <div className="guess-results">
      {guessList.map((guess, index) => renderGuessRow(guess, index))}
    </div>
  );
}

export default Guess;
