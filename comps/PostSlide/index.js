import React, {useState} from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import Button from '../Button';
import Heart from '../Heart';
import Saved from '../Saved';


const Container = styled.div`
display: flex;
max-width: 90%;
border: 1px solid red;
align-items: center;
margin-left: 40px;
`;

const Info = styled.div`
flex-grow:1;
border: 1px solid black;
`;

const Info2 = styled.div`
flex-grow:1;

`;

const Item = styled.img`


border: 1px solid #9A9A9A;
border-radius: 16px;
width: 50%;


`;


const ItemBox = styled.div`
// @media (max-width: 500px){
//   max-width: 240px;
// }
//  margin:70px;
`;

const ItemMobile = styled.img`
  width: 100px;
  border: 1px solid #9A9A9A;
  border-radius: 10px;
`;

const Infos = styled.div`
display:inline;
margin-top:70px;
margin-left:10%;

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

const TimeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SavedDiv = styled.div`
  position: absolute;
  right: 10%;
  border: 1px solid red;
  width: 150px;
  height: 150px;
`;



const PostSlide =({imgurl,title, price, time, name}) =>{
  return <div>
  <Container>
  <ItemBox>
  {process.browser && window.innerWidth > 670 ? <Item src={imgurl}/> : <ItemMobile src={imgurl} />}
  </ItemBox> 
   
    <Infos>

 
    <Info>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <TimeDiv>
        <img id='time' src='/time.svg' />
        <Time>{time}</Time>
      </TimeDiv>
    </Info>

    <Info2>
      <Seller>{name}</Seller>
      {process.browser && window.innerWidth > 670 ?<Rating width={"40px"} height={"40px"}/>: <Rating width={"20px"} height={"20px"}/>}

      <Info3>
    <Button />
    {/* <Heart /> */}
    <SavedDiv>
      <Saved />
    </SavedDiv>
    </Info3>
    

    </Info2>

    </Infos>

   
  </Container>
  </div>
}



PostSlide.defaultProps = {
imgurl:"/userpost5.png",
title:"Default",
price:"$00",
time:"Default",
name:"Seller: "

}



export default PostSlide;