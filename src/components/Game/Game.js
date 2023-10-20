import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput, { guessinput } from '../GuessInput';

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    // running | won | lost
    const [gameStatus, setGameStatus] = React.useState('running');
  return (
    <>
    {gameStatus}
    <GuessInput gameStatus={gameStatus}
                answer={answer}
                setGameStatus={setGameStatus}/>
    </>
  );
}

export default Game;
