import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const JokeStyle =styled.div`
  h1 {
    /* letter-spacing: 2pt; */
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 2.5rem;
    color: white;
  }

  > h1 {
    font-size: 3.5rem;
  }

` 




const Jokes = ({joke, punchline}) =>  {
  
  return (
    <JokeStyle>
      <h1>{joke}</h1>
      <h1>{punchline}</h1>
    </JokeStyle>
  )
}

Jokes.propTypes = {
  
};

export default Jokes;
