import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { answer } from '../Game';
function Guess({guess}) {
    const guessChecked = checkGuess(guess,answer);
    /* console.log(guessChecked) */
  return (
    <>
    <p className="guess">
      {range(5).map((el)=>(
        <span className={guessChecked?`cell ${guessChecked[el].status}`:'cell'} key={el}>
          {guessChecked ? guessChecked[el].letter : undefined}
        </span>
      ))}
      </p>
  </>
  );
}

export default Guess;
