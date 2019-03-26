import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const JokeStyle =styled.div`
  color: white;
  
  h1 {
    font-size: 4rem;
    letter-spacing: 6px;
    margin-top:-30px;
  }

  h2 {
    font-size: 2.5rem;
  }

  > h2 {
    font-size: 3.5rem;
  }

  @keyframes fadeIn { from { opacity:0; } to { opacity:1; }}

  .fade-in {
  opacity:0;
  animation: fadeIn ease-in 1;
  animation-fill-mode:forwards;
  animation-duration: .5s;
  }

` 

const Jokes = ({joke, punchline, text, name}) =>  {
  
  return (
    <JokeStyle>
      <h2>{text}</h2>
      <h1>{name}</h1>
      <h2>{joke}</h2>
      <h2 className="fade-in">{punchline}</h2>
    </JokeStyle>
  )
}

Jokes.propTypes = {
  
};

export default Jokes;
