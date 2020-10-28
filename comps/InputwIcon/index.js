import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

//var icon = require('/user_icon.png')

const Contain = styled.div`
    display: inline-flex;
`
// const Icon = styled.div`
//     position: absolute;
//     top: 20px;
//     padding: 15px;
//     min-width: 16px;
//     backgroud: ${props=>props.icon ? props.icon : "url(/user_icon.png)"};
// `

const Icon = styled.img`
    position: absolute;
    top: 20px;
    padding: 15px;
    width: 16px;
`

const Input = styled.input`
    min-height: 52px;
    min-width: 343px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 40px;

    font-family: "Assistant", sans-serif;
    font-weight: 300;
    font-size: 18px;
`

const InputwIcon = ({ placeholder, imgurl}) => {
    return <Contain>
        <Icon src={imgurl}></Icon>
        <Input type="text" placeholder={placeholder}></Input>
    </Contain>
}

InputwIcon.defaultProps = {
    placeholder:"Placeholder",
    imgurl:"/user_icon.png"
}

export default InputwIcon;