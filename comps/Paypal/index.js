import React, {useState} from 'react';
import styled from 'styled-components';
import InputPaypal from '../InputPaypal';
import Paypal_Button from '../Paypal_Button';
import Divider from '../Divider';


const Contain = styled.div`


`;

const Container = styled.div`

    margin:50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
              
    width: 511px;
    height: auto;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    padding-left:70px;

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
    display:inline;

`;



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

     
        <Paypal_Button />
        <p>Have trouble logging in?</p>


        {/* <Divider /> */}
        {/* <Paypal_Button text="Pay with Debit or Credit Card" color="#000000" bgcolor="#E2E7EB" ftweight="600"/> */}
     
    </Container>
    </Contain>
    }
    
    
    
    
    
    
 Paypal.defaultProps = {
      

    }
    
    
    export default Paypal;