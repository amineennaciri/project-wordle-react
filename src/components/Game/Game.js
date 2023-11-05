import React from 'react';
import GuessInput from '../GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuess,setUserGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  
  return (
    <>
  <GuessInput userGuess={userGuess} setUserGuess={setUserGuess}
              guesses={guesses} setGuesses={setGuesses}/>
  </>
  );
}

export default Game;