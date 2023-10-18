import React from 'react';

import GuessTrials, { guesstrials } from '../GuessTrials';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');
  const [guessTrials, setGuessTrials] = React.useState([]);
  function handleChange(event){
    if(guessInput.length>=5){
      return;
    }
    setGuessInput(event.target.value.toUpperCase());
  }
  return (
    <>  
        <GuessTrials guessTrials={guessTrials}/>
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
