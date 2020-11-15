import React, {useState} from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import Button from '../Button';
import Heart from '../Heart';



const Container = styled.div`
display: flex;
width:100%;
`;

const Info = styled.div`
flex-grow:1;
`;

const Info2 = styled.div`
flex-grow:1;

`;

const Item = styled.img`


border: 1px solid #9A9A9A;
border-radius: 16px;



`;

const ItemBox = styled.div`
@media (max-width: 500px){
  max-width: 240px;
}
 margin:70px;
`;

const Infos = styled.div`
display:inline;
margin-top:70px;
margin-left:10px;

`;

const Title = styled.h2`
margin:10px;
`;

const Price = styled.h3`
margin:10px;
`;


const Time = styled.div`

font-size:12px;
margin-left:10px;
`;

const Seller = styled.h6`
margin:20px 10px ;
`;

const Info3 = styled.div`
 display: flex;
 justify-content:space-around;

`;



const PostSlide =({imgurl,title, price, time, name}) =>{
  return <Container>
    <ItemBox>
    <Item src={imgurl} />
    </ItemBox>
   
    <Infos>

 
    <Info>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Time>{time}</Time>
    </Info>

    <Info2>
      <Seller>{name}</Seller>
      <Rating />

      <Info3>
    <Button />
    <Heart />
    </Info3>
    

    </Info2>

    </Infos>

   
  </Container>
}



PostSlide.defaultProps = {
imgurl:"/userpost5.png",
title:"Default",
price:"Default",
time:"Default",
name:"Seller: "

}



// 

export default PostSlide;