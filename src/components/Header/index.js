import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const HeaderStyle = styled.div`

width: 100vw;
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;

p {
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin: 10px;
}

`


const Header = ({text}) => {
    return (
        <HeaderStyle>
            <p>{text}</p>
        </HeaderStyle>
    );
};

Header.propTypes = {
    
};

export default Header;