import React from 'react';

function Guess({range,guessTrials}) {
  return (
    <>
        {range(5).map((el) => (
                <span className="cell" key={crypto.randomUUID()}>{guessTrials?guessTrials.split('')[el]:undefined}</span>
        ))}
    </>
  )
}

export default Guess;
