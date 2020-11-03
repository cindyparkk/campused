import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const Contain = styled.div`
    // min-width: 392px;
    min-width:400px;
    min-height: 45px;
    display: inline-flex;
    flex-direction: column;
    margin-bottom:20px;
`;


const Input = styled.input`
    min-height: 67px;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
 
  
    padding-left: 20px;
`;


const InputPaypal =({type,placeholder}) => {

    return <Contain>
        <Input type={type} placeholder={placeholder}></Input>
    </Contain>
}



InputPaypal.defaultProps = {
 
    placeholder: "email",
    width: null,
    type: "text"
}

export default InputPaypal;