import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput, { guessinput } from '../GuessInput';
// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <GuessInput />
  );
}

export default Game;
