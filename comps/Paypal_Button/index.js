import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    margin: 0;
`

const ButtonBox = styled.h6`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 400px;
    min-height: 60px;
    background: ${props=>props.bgcolor ? props.bgcolor : "#1F5A98"};
    color: ${props=>props.color ? props.color : "#FFFFFF"};
    
    
    box-sizing: border-box;
 
    cursor: pointer;
    padding: 0 30px;

    font-weight: ${props=>props.ftweight ? props.ftweight : "300"};
    
    font-family: 'Roboto', sans-serif;
    font-size: ${props=>props.fsize ? props.fsize : "15px"};
`

const Paypal_Button = ({bgcolor, text, fsize,color,ftweight}) => {
    return <Contain>
        <ButtonBox bgcolor={bgcolor} fsize={fsize} color={color} ftweight={ftweight}>{text}</ButtonBox>
    </Contain>
}

Paypal_Button.defaultProps = {
    bgcolor: "#1F5A98",
    text: "Login",
    fsize: "15px",
    color:"#FFFFFF",
    ftweight:"300"
}

export default Paypal_Button;