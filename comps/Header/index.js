import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

import CircleButton from '../CircleButton';
import Menu from '../Menu';


const Main = styled.div`
    background-color: white;
    // border: 1px solid black;
    width: 100%;
    margin: 0;
    position: relative;
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 7px;
    justify-content: space-between;
`;

const Campused = styled.img`
    width: 100%;
    cursor: pointer;
`;

const Logo = styled.div`
    max-width: 180px;
    height: auto;
    display: flex;
    margin: 0px 110px 0px 110px;
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    // border: 1px solid black;
    position: absolute;
    top: 22px;
    @media (max-width: 500px){
        top: 20px;
    }
    @media (max-width: 370px){
        top: 25px;
    }
`;

const MenuCont = styled.div`
    z-index: 2;
`;

const Icon = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    width: 60px;
    // border: 1px solid black;
    cursor: pointer;
    margin-left: 12px;
`;

const Searchmain = styled.div`
    height: auto;
    display: flex;
    margin-right: 10px;
`;

const Profile = styled.img`
    border-radius: 50%;

    max-width: 50px;
    @media (max-width: 500px){
        max-width: 40px;
    }
    height: auto;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
`;

const FlexEnd = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 12px;
    padding-left: 20px;
    // margin-left: 250px;
    max-width: 200px;
    @media (max-width: 500px) {
        max-width: 100px;
      }
`;

function clickSearch(){
    if (true){
        Router.push("/search");
    }
}

function clickProfile(){
    if (true){
        Router.push("/profile");
    }
}

function clickHome(){
    if (true){
        Router.push("/home");
    }
}

const Header = ({profileicon}) =>{
    return <Main>
    <Center>
            <Logo onClick={clickHome}>
                <Campused src="/logotext.png"/>
            </Logo>
        </Center>
    <Container>

           <MenuCont> <Menu /> </MenuCont>
   
        <FlexEnd>
            <SearchContainer onClick={clickSearch}>
                <CircleButton icon="/search.svg" width="32px" height="32px"/>
            </SearchContainer>
            <Link href="/profile"><Profile src={profileicon} onClick={clickProfile}/></Link>
        </FlexEnd>

    </Container>

    
   </Main>
   }

   
   Header.defaultProps = {
       profileicon: "/profileicon.jpg"
   }

   
   export default Header;