import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const ButtonStyle = styled.button`
    background-color: #E9C8F4;
    padding: 5px 30px;
    border: 3px solid #F7F385;
    border-radius: 50px;
    box-shadow: -2px 3px #F7F385;
    transition: 0.15s;
    text-decoration: none;
    color: #F7F385;
    text-transform: uppercase;
    outline: none;

    &:hover {
        box-shadow: 0 0 #F7F385;
        transform: translateY(3px);
        /* background-image: linear-gradient(to right, #2B7593, #8162B7) */
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
const Button = ({ onClick }) => {
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