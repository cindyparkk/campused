import React, {useState} from 'react';
import styled from 'styled-components';




const Container = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

`;

const Item_Image = styled.div`

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    width: 185px;
    height: 205px;
    margin:15px 0px;
    border: 2px solid #9A9A9A;

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



const Item = ({src, text1,text2}) => {

    return <Container>
         <Item_Image src={src}>
         </Item_Image>
         <Item_Title>
             {text1}
         </Item_Title>
         <Item_Price>
             {text2}
         </Item_Price>

    </Container>

}

Item.defaultProps = {
    src:"/photo.png",
    text1:"UBC Dorm Room 12",
    text2:"$100"

}


export default Item;