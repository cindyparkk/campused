import React from 'react';
import styled from 'styled-components';

var icon = require('../../public/arrowright.svg');

const Main = styled.div`
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    max-width: 100px;
    max-height: 100px;
    border: 2px solid black;
    box-sizing: border-box;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.65);
    cursor: pointer;
    background-color: white;
`;

const IconContainer = styled.div`
    position: relative;
`;

const Icon = styled.img`
    height: 100%;
    width: 100%;
`;


const CircleButton = ({icon}) =>{
 return <Container>
    
            <IconContainer>
                <Icon src={icon} />
            </IconContainer>

    </Container>

    
}

CircleButton.defaultProps = {
    icon: icon
}


export default CircleButton;