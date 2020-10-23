import React, {useState} from 'react';
import styled from 'styled-components';

import logo from '../../public/logo.png';
import insta from '../../public/instagram.png';
import facebook from '../../public/facebook.svg';
import twitter from '../../public/twitter.png';

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background-color: #1F5A98;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Campused = styled.img`
    height: 100%;
    width: 100%;
    
`;

const ImageContainer = styled.div`
    max-width: 15%;
    margin-top: 20px;
    margin-bottom: 5%;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Furniture = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    cursor: pointer;
`;

const About = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    cursor: pointer;
`;

const LeaveIn = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    cursor: pointer;
`;

const TextContainer2 = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 3%;
`;

const FAQ = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    cursor: pointer;
`;

const Profile = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    cursor: pointer;
`;

const Socials = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    
`;

const Instagram = styled.img`
    width: 55%;
    height: 55%;
    display: inline-block;
    background-size: cover;
    background-position: center;
    padding: 20px;
    cursor: pointer;
    
`;

const Facebook = styled.img`
    width: 55%;
    height: 55%;
    display: inline-block;
    background-size: cover;
    background-position: center;
    padding: 20px;
    cursor: pointer;
`;

const Twitter = styled.img`
    width: 65%;
    display: inline-block;
    background-size: cover;
    background-position: center;
    padding: 20px;
    cursor: pointer;
`;

const Circle = styled.div`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    border: 2px solid black;
    box-sizing: border-box;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.65);
    background-color: white;
    height:55px;
   max-width:55px;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   margin-right: 3%;
   margin-left 3%;
`;

const Copyright = styled.p`
    font-family: 'Assistant', sans-serif;
    color: white;
    margin: 50px 0px 10px 0px;
`;


const Footer = () =>{
 return <Main>
 
 <Container>

    <ImageContainer>
        <Campused src={logo} />
    </ImageContainer>
    

    <TextContainer>
        <Furniture>Furniture Market</Furniture>
        <About>About Us</About>
        <LeaveIn>Leave-in's Market</LeaveIn>
    </TextContainer>

    <TextContainer2>
        <FAQ>FAQ Page</FAQ>
        <Profile>My Profile</Profile>
    </TextContainer2>

    <Socials>
       
            <Circle>
                <Instagram src={insta}></Instagram>
            </Circle>

            <Circle>
                <Facebook src={facebook}></Facebook>
            </Circle>
        
            <Circle>
                <Twitter src={twitter}></Twitter>
            </Circle>
        
    </Socials>

    <Copyright>© Copyright Campused 2020</Copyright>

 </Container>

</Main>
}



export default Footer;