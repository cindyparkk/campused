import React, {useState} from 'react';
import styled from 'styled-components';

// var user = require('../../public/user.png');

const Container = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
                font-family: 'Montserrat', sans-serif;
                font-weight:bold;
    width: 511px;
    height: auto;
    background-color: #F3F3F3;
    border:solid 1px #000000;   
    padding:20px;
  

     h4{
         margin-top:10px;
     }

`;

const User = styled.div`

display:flex;
flex-direction:row;
margin-top:-10px;
    
`;

const User_Image = styled.div`
 min-width:78px;
 mid-height:78px;
 padding:20px;


`;

const User_Image_Circle = styled.img`

`;

const User_Name = styled.div`

margin-top:20px;
margin-left:10px;

`;
const User_Profile = styled.p`

color:#8296FF;
font-size:14px;
font-weight:300;
font-family: 'Roboto', sans-serif;

margin-top:5px;
margin-left:10px;


`;

const Total = styled.div`
    
    margin-bottom:10px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;

const Price = styled.div`

`;



const SendMoney =({text1,price,user})=> {

return <Container>
<h4>To:</h4>
<User>
    <User_Image>
        <User_Image_Circle src={user}/>
     </User_Image>

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
  
    
    text1:"Default Name",
    price:"Default",
    user:'/user.png'

}


export default SendMoney;