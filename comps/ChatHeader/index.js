import React, {useState} from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Button from '../Button';

const Main = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    z-index: 0;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

 
`;

const User = styled.div`
display: flex;
flex-direction:row;


h3 { 
    margin:10px 5px;
}

`;
const Icon = styled.img`

max-width: 50px;
    @media (max-width: 500px){
        max-width: 50px;
    }
    height: 50px;

`;

const UserImage = styled.img`


border-radius: 50%;

    max-width: 55px;
    @media (max-width: 500px){
        max-width: 50px;
        max-height: 50px;
    }
    max-height: 55px;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    z-index: 10;
    
`;

const Paynow = styled.div`
margin-top:-25px;

min-width:45px;
@media (max-width: 500px) {
    min-width: 50px;
    margin-left:5px;
  }

`;
const ChatHeader = ({user,imgurl}) =>{
    return <Main>
        <Container>
        <Icon src="lefticon.png" />
           
        <User> 
           <UserImage src={imgurl}>
       
               </UserImage>
           <h3>{user}</h3> 
        </User>
            <Paynow>
            <Button bgcolor="#3DA5D9" text="Pay Now" color="#FFFFFF" />
            </Paynow>
       
        </Container>
    </Main>
}



ChatHeader.defaultProps = {
    
    imgurl:"user.png",
    user:"Default"
  
   }
   
   
   export default ChatHeader;

