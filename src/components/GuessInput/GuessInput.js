import React from 'react';

function GuessInput({handleSubmitGuess, guesses}) {
  const [tentativeGuess,setTentativeGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
/*     if(tentativeGuess.length>4){ */
      console.log({guess: tentativeGuess});//show answer
      handleSubmitGuess(tentativeGuess);//update the guesses Array
      setTentativeGuess('');//reset
/*     } */
  }
  return (
    <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength={5} maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      disabled={guesses.length>5}
      value={tentativeGuess}
      onChange={(event)=>{
        const nextGuess = event.target.value.toUpperCase();
        setTentativeGuess(nextGuess)}}/>
    </form>
    </>
  );
}

export default GuessInput;
