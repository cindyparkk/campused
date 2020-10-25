import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`

`

const ButtonBox = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 126px;
    min-height: 46px;
    background: ${props=>props.color ? props.color : "#FEC601"};
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 10px;
    cursor: pointer;
`

const Button = ({color, text}) => {
    return <Contain>
        <ButtonBox bgcolor={color}>{text}</ButtonBox>
    </Contain>
}

Button.defaultProps = {
    color: null,
    text: "Buy Now"
}

export default Button;