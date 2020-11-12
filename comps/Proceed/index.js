import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const Contain = styled.div`
display: inline-flex;
flex-direction:row;


`;

const Arrow = styled.img`

    min-width:75px;
    height:75px;
    margin:25px;
    

`;

function clicktoPayment() {
    if (true) {
        Router.push("/Paypal");
    }
}

const Proceed = ({imgurl}) => {

    return <Contain>
        <h5>Proceed to Payment</h5>
        <Arrow src={imgurl} onClick={clicktoPayment}/>
    </Contain>
}

Proceed.defaultProps = {

    imgurl:"/arrow_payment.png"
}




export default Proceed;