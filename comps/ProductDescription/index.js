import React, {useState} from 'react';
import styled from 'styled-components';


const Main = styled.div`
    display: flex;
    justify-content: center;

`;

const Container = styled.div`
    background: #F2F2F2;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 13px;
    width: 90%;
`;

const Text = styled.p`
    margin-left: 30px;
    margin-top: 25px;
`;



const ProductDescription = ({description}) =>{
    return <Main>

    <Container>

<Text>{description}</Text>

        </Container>
   
   </Main>
   }

   ProductDescription.defaultProps = {
        description: "Place the product description here..."
   }
   
   
   export default ProductDescription;