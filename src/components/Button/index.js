import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Jokes from '../Jokes'



const ButtonStyle = styled.button`
    background-color: #F7F385;
    padding: 5px 30px;
    border: 3px solid #9CF785;
    border-radius: 30px;
    box-shadow: -2px 3px #9CF785;
    transition: 0.15s;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    outline: none;

    &:hover {
        box-shadow: 0 0 #9CF785;
        transform: translateY(3px);
        /* background-image: linear-gradient(to right, #2B7593, #8162B7) */
    }

    &:active {
        box-shadow: inset 0 0 20px #9CF785;
    }

    button {
        background: none;
        border:0;
    }
    > h2 {
        letter-spacing: 2pt;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-size: 1.4rem;
    }
`
const Button = ({ onClick,  }) => {
    return (
        <ButtonStyle>
        <h2 onClick={onClick}>Börja skratta</h2>
        </ButtonStyle>
    )
}
Button.propTypes = {
    inverted: PropTypes.bool,
};

export default Button;