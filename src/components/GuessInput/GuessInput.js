import React from 'react';

import GuessTrials, { guesstrials } from '../GuessTrials';
import Guess, { guess } from '../Guess';
import NUM_OF_GUESSES_ALLOWED, {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import range, { range } from '../../utils';
import WonBanner, {wonbanner} from '../WonBanner';
import LostBanner, {lostbanner} from '../LostBanner';

function GuessInput({gameStatus,answer,setGameStatus}) {
  const [guessInput, setGuessInput] = React.useState('');
  const [guessTrials, setGuessTrials] = React.useState([]);
  /* console.log(guessTrials) */
  function handleChange(event){
    if(guessInput.length>=5){
      return;
    }
    setGuessInput(event.target.value.toUpperCase());
  }
  return (
    <>  
        {/* <GuessTrials guessTrials={guessTrials}/> */}
        <div className="guess-results">
          {range(NUM_OF_GUESSES_ALLOWED).map((el) => (
            <p className="guess" key={crypto.randomUUID()}>
              <Guess 
                  range={range}
                  guessTrials={guessTrials[el]}
                  
              />
            </p>
          ))}
        </div>
        <form className="guess-input-wrapper" onSubmit={ (event) => {
          event.preventDefault();
          if(guessInput.length<5){
            return;
          }
          console.log({guess : guessInput});
          const nextGuesses = [...guessTrials,guessInput]
          //setGuessTrials((prevState) => [...prevState, guessInput]);
          setGuessTrials(nextGuesses);
          if(guessInput=== answer){
            setGameStatus('won');
          }else if(nextGuesses.length>= NUM_OF_GUESSES_ALLOWED){
            setGameStatus('lost');
          }
          setGuessInput('');
        }}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input id="guess-input" type="text" onChange={handleChange} value={guessInput} disabled={gameStatus!='running'}/>
        </form>
        {gameStatus==='won' && (
          <WonBanner numOfGuesses={guessTrials.length}/>
    )}
        {gameStatus==='lost' && (
              <LostBanner answer={answer}/>
    )}
    </>
  );
}

export default GuessInput;
