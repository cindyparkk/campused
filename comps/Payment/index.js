import React, {useState} from 'react';
import styled from 'styled-components';


import Browse_Button from '../Browse_Button';

const Container = styled.div`

    // margin:50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
              
    width: 60%;
    height: auto;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:4% 0%;


     p {
         color:#1F5A98;
         font-size:15px;
        margin-top:-20px;
        padding-bottom:30px;
     }
     @media(min-width: 768px) and (max-width: 1024px){
         width: 80%;
     }

     @media(max-width: 480px){
        width: 85%;
     }
    `;


const First = styled.div`
     margin-top:15px;
     display: inline-flex;
     align-items: center;
     justify-content: center;

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
const Title = styled.h6`
    font-size: 28px;
`

const Payment =({title, name, link})=> {

    return   <Container>
    
   <First>
      <img src="/complete.svg"/> 
      <Title>{title}</Title>
   </First>
     <Second>
     <h5><span>{name}</span> has received your payment.</h5>
     <p>{link}</p>
     </Second>
    <Browse_Button></Browse_Button>

    </Container>
   
    }
    
    
    
    
    
    
Payment.defaultProps = {
    title: "Payment Successful!",
    name:"Default",
    link: "You will be sent your payment summary via paypal."
}
    
    
    export default Payment;