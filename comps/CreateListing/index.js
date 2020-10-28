import React, {useState} from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
background-color: #F2F2F2;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 13px;
width: 100%;
height: 100%;
margin: 17px;
`;

const Text = styled.h1`
    color: black;
    margin-left: 45px;
    margin-top: 35px;
`;


const CreateListing = () =>{
 return <Main>
 
 <Container>
    
    <Text>Create a Listing</Text>

    </Container>

    </Main>
}



export default CreateListing;