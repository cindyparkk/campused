import React, {useState} from 'react';
import styled from 'styled-components';



const Container = styled.div`
    display:flex;
    flex-direciton:row;
    width:100%;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    

`;
const Box = styled.div`
width: 100%;
display: flex;

justify-content: space-around;
flex-flow: row wrap;
align-items: stretch;

`;
const UserImage = styled.img`
flex-grow:1;
border-radius: 50%;

min-width: 50px;
@media (max-width: 500px){
    min-width: 50px;
}
min-height:50px;
margin-right: 10px;
margin-left: 10px;
cursor: pointer;
position:absolute;
`;

const Message = styled.div`
flex-grow:3;
`;

const User  = styled.h6`

`;

const User_text = styled.p`

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