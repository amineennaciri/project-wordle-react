import React from 'react';
import { checkGuess } from '../../game-helpers';
import {answer} from '../Game';
import Cell, { cell } from '../Cell';
function Guess({range,guessTrials}) {
  /* <span className="cell" key={crypto.randomUUID()}>{guessTrials?guessTrials.split('')[el]:undefined}</span> */
  /* checkGuess(guessTrials,answer)[el].letter */
  const result = checkGuess(guessTrials,answer);
  return (
    <>
        {range(5).map((el, index) => (
          <Cell letter={result ? result[el].letter : undefined}
                status={result ? result[el].status : undefined}
                key={index}
          />              
        ))}
    </>
  )
}

export default Guess;
