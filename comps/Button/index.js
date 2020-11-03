import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    margin: 0;
    display: inline-flex;
    min-width: 126px;
`

const ButtonBox = styled.h6`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 126px;
    min-height: 46px;
    background: ${props=>props.bgcolor ? props.bgcolor : "#FEC601"};
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 10px;
    cursor: pointer;
    padding: 10px 50px;

    font-size: ${props=>props.fsize ? props.fsize : "17px"};
    color: ${props=>props.color ? props.color : "#000"};
`
// const Icon = styled.img`
//     width: ${props=>props.icon ? "" : "48px"};
//     margin-right: 5px;
// `

const Button = ({bgcolor, text, fsize, color}) => {
    return <Contain>
        <ButtonBox bgcolor={bgcolor} fsize={fsize} color={color}>
            {/* <Icon src={icon}></Icon> */}
            {text}
        </ButtonBox>
    </Contain>
}

Button.defaultProps = {
    bgcolor: "#FEC601",
    text: "Contact Seller",
    fsize: "17px",
    color: null
}

export default Button;