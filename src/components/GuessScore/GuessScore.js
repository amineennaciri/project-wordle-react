import React from 'react';
/* import { answer } from '../Game'; */
function GuessScore({guesses,handleRestartGame,answer}) {
  if(guesses.includes(answer)){
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in {' '}
          <strong>{guesses.length>1?`${guesses.length} guesses`:`${guesses.length} guess`}</strong>.
        </p>
        <button onClick={handleRestartGame}>Restart the game!</button>
      </div>
    );
  }else if(guesses.length>5){
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button onClick={handleRestartGame}>Restart the game!</button>
      </div>

    );
  }
}

export default GuessScore;
