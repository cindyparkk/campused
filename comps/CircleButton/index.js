import React, {useState} from 'react';
import styled from 'styled-components';

import Symbol from '../../public/arrowright.svg';

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 50%;
max-width: 75px;
max-height: 75px;
border: 2px solid black;
box-sizing: border-box;
box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.65);
`;

const IconContainer = styled.div`
    position: relative;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
`;


const CircleButton = () =>{
 return <Main>
 
 <Container>
    
    <IconContainer>
    <Icon src={Symbol} />
    </IconContainer>

    </Container>

    </Main>
}

CircleButton.defaultProps = {
    
}


export default CircleButton;