import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import GuessScore from '../GuessScore';
import { sample } from '../../utils';
import { WORDS } from '../../data';
// Pick a random word on every pageload.

/* export const answer = sample(WORDS); */
// To make debugging easier, we'll log the solution in the console.
/*console.info({ answer });*/

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [answer, setAnswer] = React.useState(()=> {return sample(WORDS)});
  console.info({ answer });
  function handleSubmitGuess(tentativeGuess){
    setGuesses([...guesses,tentativeGuess]);//add to the list of trials
  }

  function handleRestartGame(){
    setGuesses([]);//reset guesses trials Array
    setAnswer(()=> {return sample(WORDS)});//choose a new answer
  }
  
  return (
    <>
    <GuessResults guesses={guesses} answer={answer}/>
    <GuessInput handleSubmitGuess={handleSubmitGuess} guesses={guesses}/>
    <GuessScore guesses={guesses} handleRestartGame={handleRestartGame}
          answer={answer}/>
  </>
  );
}

export default Game;