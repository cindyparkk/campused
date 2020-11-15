import React, {useState} from 'react';
import styled from 'styled-components';


const Main = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 40px;
`;

const Container = styled.div`
    display:flex;
    background: #FEC601;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 13px;
    width: 100%;
 
`;



const Text = styled.h4`
padding-left:20px;
`;



const OrderInfo = ({seller,info}) =>{
    return <Main>

    <Container>
    <Text>

    Order Information
    <br />
        You are chatting with {seller} about {info}
  
    </Text>
    

        </Container>
   
   </Main>
   }

   OrderInfo.defaultProps = {
    
    seller: "Default",
    info:"Default"
   }
   
   
   export default OrderInfo;