import React from 'react';

function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');
  function handleChange(event){
    if(guessInput.length>=5){
      return;
    }
    setGuessInput(event.target.value.toUpperCase());
  }
  return (
    <>
        <form className="guess-input-wrapper" onSubmit={ (event) => {
          event.preventDefault();
          if(guessInput.length<5){
            return;
          }
          console.log({guess : guessInput});
          setGuessInput('');
        }}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input id="guess-input" type="text" onChange={handleChange} value={guessInput}/>
        </form>
    </>
  );
}

export default GuessInput;
