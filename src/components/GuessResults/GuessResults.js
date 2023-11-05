import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';
function GuessResults({guesses}) {
  return (
        
        <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((el,index)=>(
            <Guess guess={guesses[el]} key={index}/>
  ))}
      </div>
);
}

export default GuessResults;
