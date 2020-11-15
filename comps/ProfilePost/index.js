import React, {useState} from 'react';
import styled from 'styled-components';
import ExpandedMenu from '../ExpandedMenu';

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px 0;
`;

const Container = styled.div`
    background-color: rgba(255, 255, 255, 0.89);
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 16px;
    width: 100%;
    max-height: 137px;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    padding: 10px;
    padding-left: 30px;
    align-items: center;
`;

const Text = styled.div`
    margin-left: 30px;
    line-height: 0.3;
`;

const Title = styled.h4`
    font-family: 'Assistant', sans-serif;
    font-weight: 300;
`;

const Image = styled.img`
    border-radius: 8px;
    width: 100%;
    height: 100%;
`;

const ImageContainer = styled.div`
    max-width: 300px;
    max-height: 300px;
`;

const Description = styled.p`
font-family: 'Assistant', sans-serif;
font-weight: 300;
line-height: 1;
`;

const Price = styled.h3`
`;

const ProfilePost = ({title, description, price, image}) =>{
    return <Main>

    <Container>

        <ImageContainer>
                <Image src={image} />
        </ImageContainer>

            <Text>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>${price}</Price>
            </Text>

    </Container>
    <ExpandedMenu />
   
   </Main>
   }

   ProfilePost.defaultProps = {
       title: 'Default Title',
       description: 'Description goes here...',
       price: '00',
       image: '/userpost.png'
   }
   
   
   
   export default ProfilePost;