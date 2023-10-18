import React from 'react';

import GuessTrials, { guesstrials } from '../GuessTrials';
import Guess, { guess } from '../Guess';
import NUM_OF_GUESSES_ALLOWED, {NUM_OF_GUESSES_ALLOWED} from '../../constants';
import range, { range } from '../../utils';

function GuessInput() {
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
          setGuessTrials((prevState) => [...prevState, guessInput]);
          setGuessInput('');
        }}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input id="guess-input" type="text" onChange={handleChange} value={guessInput}/>
        </form>
    </>
  );
}

export default GuessInput;
