import React, {useState} from 'react';
import styled from 'styled-components';


var photo = require('../../public/photo.png');

const Container = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    

`;
const Image_Box = styled.div`

  
        width:185px;
        height:205px;
        margin-bottom:15px;
        padding:0;
        
        background-position: center;
        background-size: cover;
        box-sizing: border-box;
`;

const Item_Image = styled.img`

         background-size: cover;
         
        border: 2px solid #9A9A9A;
        border-radius: 16px;
        width:183px;
        height:205px; 
      
        margin:0;
    


`;

const Item_Title = styled.h5`
    font-family: 'Montserrat', sans-serif;
    color:#18191F;
    margin:2px 0px;

`;

const Item_Price = styled.h6`
    font-family: 'Montserrat', sans-serif;
    margin:5px 0px;
    color:#474A57;
`;



const Item = ({text1,text2}) => {

    return <Container>
        <Image_Box>
        <Item_Image src={photo}/>
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
    text2:"$100"

}


export default Item;