import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    min-width: 343px;
    min-height: 89px;
    display: inline-flex;
    flex-direction: column;
`

const Title = styled.h6`
    margin-bottom: 15px;

    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 20px; 
`

const Input = styled.input`
    min-height: 52px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 15px;

    font-family: "Assistant", sans-serif;
    font-weight: 300;
    font-size: 18px;
`

const InputSignup = ({title, placeholder}) => {
    return <Contain>
        <Title>{title}</Title>
        <Input type="text" placeholder={placeholder}></Input>
    </Contain>
}

InputSignup.defaultProps = {
    title:"Title",
    placeholder:"ex: John"
}

export default InputSignup;