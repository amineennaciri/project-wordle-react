import React from 'react';

function GuessInput({userGuess,setUserGuess}) {

  function handleSubmit(event){
    event.preventDefault();
    if(userGuess.length>4){
      console.log({guess: userGuess});//show answer
      setUserGuess('');//reset
    }
  }
  return (
    <>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength={5} maxLength={5} value={userGuess}
      onChange={(event)=>setUserGuess(event.target.value.toUpperCase())}/>
    </form>
    </>
  );
}

export default GuessInput;
