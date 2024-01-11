import React from "react";
import { range } from "../../utils";

function Guess({ guessList }) {
  const renderGuessRow = (guess) => (
    <p className="guess" key={guess.id}>
      {range(0, 5).map((index) => (
        <span className="cell" key={index}>
          {guess.label[index] || ""}
        </span>
      ))}
    </p>
  );
  return (
    <div className="guess-results">
      {guessList.map((guess) => renderGuessRow(guess))}
      {/* Add more rows or customize as needed */}
    </div>
  );
}

export default Guess;
