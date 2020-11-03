import React, {useState} from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Browse_Button from '../Browse_Button';





const Container = styled.div`

    margin:50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
              
    width: 511px;
    height: auto;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    padding-left:90px;

    align-items: center;

    justify-content: center;


     p {
         color:#1F5A98;
         font-size:15px;
        margin-top:-20px;
        padding-bottom:30px;
     }
    `;


    const First = styled.div`
     margin-top:15px;
     display: inline-flex;

     img {
         margin:15px;
         width:63px;
         height:63px;
     }
    `;

    const Second = styled.div`



    span {
        font-weight: 800;
        font-size: 27px;
    }
    `;

const Payment =({name})=> {

    return   <Container>
      
   <First>
      <img src="/complete.svg"/> 
      <h3>Payment Successful!</h3>
   </First>
     <Second>
     <h5><span>{name}</span> has received your payment.</h5>
     <p>You will be sent your payment summary via paypal.</p>
     </Second>
    <Browse_Button></Browse_Button>

    </Container>
   
    }
    
    
    
    
    
    
Payment.defaultProps = {

      name:"Default"

    }
    
    
    export default Payment;