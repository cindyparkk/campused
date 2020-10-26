import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    display: inline-flex;
`
const Icon = styled.img`
    position: absolute;
    top: 20px;
    padding: 15px;
    min-width: 16px;
`

const Input = styled.input`
    min-height: 52px;
    min-width: 343px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 40px;
`

const InputwIcon = ({icon, placeholder}) => {
    return <Contain>
        <Icon src={icon}></Icon>
        <Input type="text" placeholder={placeholder}></Input>
    </Contain>
}

InputwIcon.defaultProps = {
    icon: "url(/user_icon.png}",
    placeholder:"Placeholder"
}

export default InputwIcon;