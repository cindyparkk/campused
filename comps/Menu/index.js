import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Item = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 60px;
    cursor: pointer;

    &:hover {
        color: #EA7317;
    }

    &:active {
        color: #EA7317;
    }
`

const Menu = ({text}) => {
    return <Contain>
        <Item>{text}</Item>
    </Contain>
}

Menu.defaultProps = {
    text:"Home"
}

export default Menu;