import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const Container = styled.div`
    width: 100%;
    font-weight:bold;
    font-size:24px;
    display:inline-flex;
    flex-direction:column;
    cursor: pointer;
`;

const DropDownMenu = styled.div`
    display:inline-flex;
    justify-content:space-between;
    border: 2px solid #000000;
    border-radius: 16px;
    padding:5px 10px;
    max-height: 71px;
    // min-width: 350px;
    // width: 100%;
`;

const DropDownBox = styled.div`
    padding:10px;
    display:inline-flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
`;

const Arrow = styled.img`
    max-width: 29px;
    height: auto;
    transition: 0.3s;
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`;

const Title = styled.h3`
    white-space: nowrap;
`;

const DropDown =({title})=> {
    const [expanded, setExpanded] = useState(false);

    return <div>
    <Container>
        <DropDownMenu onClick={() => { 
            setExpanded(!expanded);
        }}>
            <DropDownBox>
                <Title>{title}</Title>
                    <Arrow src='/arrowdown.png' expanded={expanded}/>
            </DropDownBox>
        </DropDownMenu>
       
    </Container>
    </div>
}

DropDown.defaultProps = {
    title: 'Default'
}


export default DropDown;