import React, {useState} from 'react';
import styled from 'styled-components';




const Container = styled.div`

display:flex;
justify-content:center;


`;


const Line = styled.div`

        width: 503px;
        height: 0px;
        padding: 0px;
        border: 1px solid #C6C6C6;
        opacity:0.7;
        background-color: #C6C6C6;
        margin: 5px;
    
`;



const Divider = () => {

    return <Container>
          <Line></Line>
    </Container>

}


Divider.defaultProps = {
    

}


export default Divider;