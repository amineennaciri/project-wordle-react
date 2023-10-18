import React from 'react';

function GuessTrials({guessTrials}) {
  return (
    <>
      <div className="guess-results">
          {guessTrials.map(el=>(
            <p className="guess" key={crypto.randomUUID()}>{el}</p>
          ))}
        </div>
    </>
  )
}

export default GuessTrials;
