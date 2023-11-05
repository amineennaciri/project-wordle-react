import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GuessScore from '../GuessScore';
import { sample } from '../../utils';
import { WORDS } from '../../data';
// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess){
    setGuesses([...guesses,tentativeGuess]);//add to the list of trials
  }
  
  return (
    <>
    <GuessResults guesses={guesses}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess} guesses={guesses}/>
    <GuessScore guesses={guesses}/>
  </>
  );
}

export default Game;