import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
font-family: 'Assistant', sans-serif;

`;

const Title = styled.h4`

margin:0;
font-family: 'Assistant', sans-serif;

`;

const Input = styled.p` 

width:147px;
height:67px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 17px;
border:solid 1px #000000;
padding: 5px;
display:flex;
margin-top:15px;




    span {

        position:absolute;
         color: #999999;
       padding : 22px;
       text-align:start;

    //    align-self:  start;

    }
`;

const Price =({text1,text2}) => {

    return  <Container>

        <Title>{text1}</Title>
        <Input>
        <span>$</span> {text2}
        </Input>

    </Container>
 

}


Price.defaultProps = {
  
    text1:"Default",
    text2:""

}


export default Price;