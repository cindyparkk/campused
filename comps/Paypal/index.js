import React, {useState} from 'react';
import styled from 'styled-components';
import InputPaypal from '../InputPaypal';
import Paypal_Button from '../Paypal_Button';
import Divider from '../Divider';
import Router from 'next/router';


const Contain = styled.div`


margin-bottom:5%;
margin-left:-1%;
`;

const Container = styled.div`


    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
              
    min-width: 511px;
    @media (max-width: 375px){
        min-width:300px;
    margin-left:-3%;
     }
    height: auto;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    padding:5%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;


     p {
         color:#1F5A98;
         font-size:15px;
        margin-top:-20px;
        padding-bottom:30px;
     }
    `;

const Input = styled.div`
    // display:inline;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;

`;

function clickPaypal(){
    if(true){
        location ="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fmyaccount%2Ftransfer&state=%2Frequest";
    }
}

const Paypal =()=> {

    return <Contain>
        <br></br>
        <img src="/paypal.png" />
        <Container>
        <h5>Pay with Paypal</h5>

        <Input>
        <InputPaypal />
        <InputPaypal placeholder="password" />
        </Input>

     
        <Paypal_Button onClick={clickPaypal}/>
        <p>Have trouble logging in?</p>


        {/* <Divider /> */}
        {/* <Paypal_Button text="Pay with Debit or Credit Card" color="#000000" bgcolor="#E2E7EB" ftweight="600"/> */}
     
    </Container>
    </Contain>
    }
    
    
    
    
    
    
Paypal.defaultProps = {
      
}
    
    export default Paypal;