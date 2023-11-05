import React from 'react';

function GuessInput({userGuess,setUserGuess,guesses,setGuesses}) {

  function handleSubmit(event){
    event.preventDefault();
    if(userGuess.length>4){
      console.log({guess: userGuess});//show answer
      setGuesses(()=>[...guesses,userGuess]);//add to the list of trials
      console.log(guesses);
      setUserGuess('');//reset
    }
  }
  return (
    <>
      <div className="guess-results">
        <p className='guess'>Hello</p>
        {guesses.map((el)=>{
          <p className="guess" key={guesses.indexOf(el)}>el</p>
        })}
      </div>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" minLength={5} maxLength={5} value={userGuess}
      onChange={(event)=>setUserGuess(event.target.value.toUpperCase())}/>
    </form>
    </>
  );
}

export default GuessInput;
