import React, {useState} from 'react';
import styled from 'styled-components';



const Container = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    font-family: 'Montserrat', sans-serif;
    font-weight:bold;
    width: 511px;
    height: 370px;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    padding:20px;
`;

const User = styled.div`

display:flex;
flex-direction:row;

`;

const User_Image = styled.div`
width:78px;
height:78px;
margin:50px;
`;

const User_Name = styled.div`

`;
const User_Profile = styled.p`

color:#8296FF;
font-size:14px;
font-weight:300;
font-family: 'Roboto', sans-serif;
margin:0

`;

const Total = styled.div`
    
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;

const Price = styled.div`

`;



const SendMoney =({user,text1,price})=> {

return <Container>

<p>To:</p>
<User>
    <User_Image src={user}></User_Image>
    <div>
    <User_Name>{text1}</User_Name>
    <User_Profile>View Profile</User_Profile>
    </div>
</User>

<Total>
<div>Grand Total:</div> <Price>${price} CAD</Price>
</Total>


</Container>

}






SendMoney.defaultProps = {
  
    user:"./user.png",
    text1:"Default Name",
    price:"Default"

}


export default SendMoney;