import React, {useState} from 'react';
import styled from 'styled-components';


const Main = styled.div`
display: flex;
justify-content: center;
flex-direction: column;

width:100%;
margin-left:40px;
`;

const Title = styled.h6`

margin-bottom:-10px;

`;


const Detail1 = styled.h6`
display: flex;
justify-content: space-between;
margin:0;
padding:10px;

`;

const Info1 = styled.h6`
margin-left:-10px;
`;

const Info2 = styled.h6`

margin-right:100px;
opacity:0.7;

`;



const ProductDetails =({info1,info2}) => {
    return <Main>

        <Title>Details</Title>
            <Detail1>
                <Info1>{info1}</Info1>
               <Info2>{info2}</Info2>
            </Detail1>

            {/* <Detail2>
               Dorm Room    <Info>{room}</Info>
            </Detail2> */}
      
    </Main>
}

ProductDetails.defaultProps = {
     info1:"Default",
    info2:"Default"
}



export default ProductDetails;