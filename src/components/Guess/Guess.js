import React from 'react';
import { range } from '../../utils';
function Guess({guess}) {
  /* console.log(guess);
  const guessArray = guess.split('');
  console.log(guessArray) */
  return (
    <>
    <p className="guess">
      {range(5).map((el)=>(
        <span className="cell" key={el}>
          {guess ? guess[el] : undefined}
        </span>
      ))}
      </p>
  </>
  );
}

export default Guess;
