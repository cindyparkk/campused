import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    marign: 0;
    left: 0;
    // margin-top: 65px;
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
    cursor: pointer;
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const Furniture = styled.p`
    color: white;
    cursor: pointer;
`;

const About = styled.p`
    color: white;
    cursor: pointer;
`;

const LeaveIn = styled.p`
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
    color: white;
    cursor: pointer;
`;

const Profile = styled.p`
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
    color: white;
    margin: 50px 0px 10px 0px;
`;

function clickHome(){
    if(true){
        Router.push("/home");
    }
}

function clickAbout(){
    if(true){
        Router.push("/about");
    }
}

function clickFurniture(){
    if(true){
        Router.push("/furniture-market");
    }
}

function clickLeavein(){
    if(true){
        Router.push("/leave-in");
    }
}

function clickFAQ(){
    if(true){
        Router.push("/faq");
    }
}

function clickProfile(){
    if(true){
        Router.push("/profile");
    }
}


const Footer = () =>{
 return <Main>
 
 <Container>

    <ImageContainer onClick={clickHome}>
        <Campused src='/logo.png' />
    </ImageContainer>
    

    <TextContainer>
        <Furniture onClick={clickFurniture}>Furniture Market</Furniture>
        <About onClick={clickAbout}>About Us</About>
        <LeaveIn onClick={clickLeavein}>Leave-in's Market</LeaveIn>
    </TextContainer>

    <TextContainer2>
        <FAQ onClick={clickFAQ}>FAQ Page</FAQ>
        <Profile onClick={clickProfile}>My Profile</Profile>
    </TextContainer2>

    <Socials>
       
            <Circle>
                <Instagram src='/instagram.png'></Instagram>
            </Circle>

            <Circle>
                <Facebook src='/facebook.svg'></Facebook>
            </Circle>
        
            <Circle>
                <Twitter src='/twitter.png'></Twitter>
            </Circle>
        
    </Socials>

    <Copyright>© Copyright Campused 2020</Copyright>

 </Container>

</Main>
}



export default Footer;