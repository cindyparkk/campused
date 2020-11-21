import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    display: flex;
    min-width: 343px;
`

const AlertBox = styled.div`
    padding: 20px;
    background: ${props=>props.bgcolor ? props.bgcolor : "#FEC601"};
    color: white;
    border: 2px solid black;
    border-radius: 6px;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    width: 100%;
    text-align: center;
`

const Alert = ({bgcolor, text, onClick}) => {
    return <Contain>
        <AlertBox bgcolor={bgcolor} onClick={onClick}>
            {text}
        </AlertBox>
    </Contain>
}

Alert.defaultProps = {
    bgcolor: "#f44336",
    text: "Password must be 6 characters or longer.",
}

export default Alert;