import React, {useState} from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display:flex;
    flex-direciton:row;
    width:100%;
    display: flex;
    align-items: center;


    
    

`;
const Box = styled.div`
width: 100%;
display: flex;
margin:20px;





`;
const UserImage = styled.img`

border-radius: 50%;

max-width: 100px;
@media (max-width: 375px){
    max-width: 50px;
    height:50px;
}
height:100px;

margin:20px;
cursor: pointer;



`;

const Message = styled.div`

margin-top:5%;
margin-left:3%;





`;

const User  = styled.h6`

margin:0;
color:#3DA5D9;

`;

const User_text = styled.p`


@media (max-width: 375px){
   margin:1%;
}
`;

const ChatMsg =({imgurl,name,message}) => {
    return <Container>
                <Box>
        
             <UserImage src={imgurl}/ >
            <Message>
                <User> {name} </User>
                <User_text>{message}</User_text>
            </Message>
            </Box>
        </Container>
    
}

ChatMsg.defaultProps={
 imgurl:"user.png",
 name:"Default",
 message:"Default"

}

export  default ChatMsg;