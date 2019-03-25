import React from 'react';
import PropTypes from 'prop-types';

const Jokes = props => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

Jokes.propTypes = {
  
};

export default Jokes;
