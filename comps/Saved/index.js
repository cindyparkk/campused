import React, {useState} from 'react';
import styled from 'styled-components';

import CircleButton from '../CircleButton';

const Main = styled.div`
   display: inline-block;
`;

const Icon = styled.img`
    color: red;
`;

const IconContainer = styled.div`
    width: 100%;
    justify-content: flex-end;
    display: flex;
    margin-bottom: 10px;
`;

const Added = styled.img`
    width: 100%;
    height: 100%;
`;

const Text = styled.p`
    font-size: 12pt;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
`;

const AddedContainer = styled.div`
    max-width: 200px;
    position: relative;
`;

const Saved = () =>{
    

 return <Main>


    <IconContainer>
        <CircleButton icon='/saved.svg' iconwidth='32px'/>
     </IconContainer>

    <AddedContainer>
     <Added src='/addedtosaved.png' />
     <Text>Added to Saved Listings</Text>
     </AddedContainer>

     
    </Main> 
    
}

Saved.defaultProps = {
   
}


export default Saved;