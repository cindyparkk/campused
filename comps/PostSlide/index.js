import React, {useState} from 'react';
import styled from 'styled-components';
import Rating from '../Rating';
import Button from '../Button';
import Heart from '../Heart';
import Saved from '../Saved';


const Container = styled.div`
position: relative;
display: flex;
max-width: 90%;
border: 1px solid red;
align-items: center;
margin-left: 40px;
overflow: hidden;
`;

const Info = styled.div`
flex-grow:1;
border: 1px solid black;
`;

const Info2 = styled.div`
flex-grow:1;
border: 2px solid black;
position: relative;
width: 100%;
`;

const Item = styled.img`
border: 1px solid #9A9A9A;
border-radius: 16px;
width: 300px;
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
  border: 1px solid green;
  overflow: hidden;
`;

const TimeDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SavedDiv = styled.div`
  border: 1px solid red;
  max-width: 150px;
  height: 150px;
  margin-left: 50px;
  margin-top: 40px;
  overflow: hidden;
`;

const ButtonDiv = styled.div`
  border: 1px solid blue;
  max-width: 150px;
  overflow: hidden;
`;

const TitleMobile = styled.h4`
  margin: 10px;
`;

const PriceMobile = styled.h4`
  margin: 10px;
`;

const Info3Mobile = styled.div`
display: flex;
border: 1px solid green;
overflow: hidden;
`;

const SavedDivMobile = styled.div`
  
  border: 1px solid blue;
  max-width: 150px;
  height: 150px;
  // margin-left: 50px;
  // margin-top: 40px;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
`;

const PostSlide =({imgurl,title, price, time, name}) =>{
  return <div>
  <Container>
  <ItemBox>
  {process.browser && window.innerWidth > 670 ? <Item src={imgurl}/> : <ItemMobile src={imgurl} />}
  </ItemBox> 
   
    <Infos>

 
    <Info>
    {process.browser && window.innerWidth > 670 ? <Title>{title}</Title> : <TitleMobile>{title}</TitleMobile>}
    {process.browser && window.innerWidth > 670 ? <Price>{price}</Price> : <PriceMobile>{price}</PriceMobile>}
      <TimeDiv>
        <img id='time' src='/time.svg' />
        <Time>{time}</Time>
      </TimeDiv>
    </Info>

    <Info2>
      <Seller>{name}</Seller>
      {process.browser && window.innerWidth > 670 ?<Rating width={"40px"} height={"40px"}/>: <Rating width={"20px"} height={"20px"}/>}

  {process.browser && window.innerWidth > 670 ?<Info3>

  <ButtonDiv>
    <Button />
  </ButtonDiv>


    {/* <Heart /> */}
    <SavedDiv>
      <Saved />
    </SavedDiv>
    </Info3> : <Info3Mobile>
        <ButtonDiv>
        <Button />
      </ButtonDiv>

      {process.browser && window.innerWidth > 670 ?<SavedDiv>
          <Saved />
        </SavedDiv> : <SavedDivMobile><Saved/></SavedDivMobile>}
    </Info3Mobile>}
    

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