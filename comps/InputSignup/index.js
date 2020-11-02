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
`

const Input = styled.input`
    min-height: 52px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 15px;
    margin-top: ${props=>props.margin ? props.margin : 0};
`

const InputSignup = ({title, placeholder, type, margin}) => {
    return <Contain>
        <Title>{title}</Title>
        <Input type={type} placeholder={placeholder} margin={margin}></Input>
    </Contain>
}

InputSignup.defaultProps = {
    title:"Title",
    placeholder:"ex: John",
    type: "text",
    margin: null
}

export default InputSignup;