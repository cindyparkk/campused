import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    min-width: 392px;
    min-height: 121px;
    display: inline-flex;
    flex-direction: column;
`

const Title = styled.h3`
`

const Input = styled.input`
    min-height: 67px;
    background: #FFFFFF;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    padding-left: 20px;
`

const InputPost = ({title, placeholder}) => {
    return <Contain>
        <Title>{title}</Title>
        <Input type="text" placeholder={placeholder}></Input>
    </Contain>
}

InputPost.defaultProps = {
    title: "Title",
    placeholder: "Enter Title"
}

export default InputPost;