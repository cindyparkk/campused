import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

//var icon = require('/user_icon.png')

const Contain = styled.div`
    display: inline-flex;
    flex-direction: column;
`
const Title = styled.h3`
    margin: 20px 0;
`

const Box = styled.div`
    display: inline-flex;
    align-items: center;
`
// const Icon = styled.div`
//     position: absolute;
//     top: 20px;
//     padding: 15px;
//     min-width: 16px;
//     backgroud: ${props=>props.icon ? props.icon : "url(/user_icon.png)"};
// `

const Icon = styled.img`
    // position: fixed;
    // padding: 15px;
    width: 16px;
    overflow:hidden;
    position: relative;
    left: -91%;
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

const InputwIcon = ({ title, placeholder, icon}) => {
    return <Contain>
        <Title>{title}</Title>
        <Box>
            <Input type="text" placeholder={placeholder}></Input>
            <Icon src={icon}></Icon>
        </Box>
    </Contain>
}

InputwIcon.defaultProps = {
    title: "Title",
    placeholder:"Placeholder",
    icon:"/user_icon.png"
}

export default InputwIcon;