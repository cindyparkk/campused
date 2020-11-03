import React, {useState} from 'react';
import styled from 'styled-components';


// var photo = require('../../public/photo.png');

const Container = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    

`;

const Image_Box = styled.div`
    max-width: 185px;
    max-height: 205px;
`;


const Item_Image = styled.img`
        
width: 100%;
height: 100%;
margin-bottom:15px;

border: 2px solid #9A9A9A;
border-radius: 16px;

// box-sizing: border-box;
// background-size: cover;
// background-position: center;
        
        object-fit:cover;
        margin:0;
        padding:0;
    


`;

const Item_Title = styled.h5`
    // font-family: 'Montserrat', sans-serif;
    color:#18191F;
    margin:10px 5px 0px 0px;

`;

const Item_Price = styled.h6`
    // font-family: 'Montserrat', sans-serif;
    margin:5px 0px;
    color:#474A57;
`;



const Item = ({text1,text2,imgurl}) => {

    return <Container>
        <Image_Box>
        <Item_Image src={imgurl}/>
        </Image_Box>   
      

         <Item_Title>
             {text1}
         </Item_Title>
         <Item_Price>
             {text2}
         </Item_Price>

    </Container>

}

Item.defaultProps = {
   
    text1:"UBC Dorm Room 12",
    text2:"$100",
    imgurl:"/userpost.png"

}


export default Item;