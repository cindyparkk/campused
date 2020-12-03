import React from 'react';
import styled from 'styled-components';

const Contain = styled.div`
display: inline-flex;
flex-direction:row;
cursor: pointer; 
min-width:300px;

    @media (max-width: 500px){
        min-width:100px;
        left-margin:-30px;
    }
    h5 {

    @media (max-width: 500px){
        font-size:21px;
        margin-right:0;
    }
`;

const Arrow = styled.img`
    min-width:75px;
    min-height:75px;

    @media (max-width: 500px){
        width:25%;
        height:25%;
        margin-right:25%;
     
    }
 
    margin:25px;

`;

const Proceed = ({imgurl}) => {

    return <Contain>
        <h5>Proceed to Payment</h5>
        <Arrow src={imgurl}/>
    </Contain>
}

Proceed.defaultProps = {

    imgurl:"/arrow_payment.png"
}




export default Proceed;