import React, {useState} from 'react';
import styled from 'styled-components';

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

const ProfileIconCont = styled.div`
    max-width: 50px;
    @media (max-width: 500px){
        max-width: 40px;
    }
    height: auto;
    display: flex;
    margin-right: 10px;
    margin-left: 10px;
`;

const Profile = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

const Header = ({profileicon}) =>{
    return <Main>
    <Center>
            <Logo>
                <Campused src="/logotext.png"/>
            </Logo>
        </Center>
    <Container>

           <MenuCont> <Menu /> </MenuCont>
   
        <FlexEnd>
            <SearchContainer>
                <CircleButton icon="/search.svg" width="32px" height="32px"/>
            </SearchContainer>
            <ProfileIconCont>
                <Profile src={profileicon} />
            </ProfileIconCont>
        </FlexEnd>

    </Container>

    
   </Main>
   }

   
   Header.defaultProps = {
       profileicon: "/profileicon.jpg"
   }

   
   export default Header;