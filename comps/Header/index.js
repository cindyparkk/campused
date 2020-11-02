import React, {useState} from 'react';
import styled from 'styled-components';

import CircleButton from '../CircleButton';
import Menu from '../Menu';


const Main = styled.div`
    background-color: white;
    // border: 1px solid black;
    width: 100%;
    margin: 0;
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
`;

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    // border: 1px solid black;
`;

const MenuCont = styled.div`
    max-width: 31px;
    max-height: 31px;
    margin-left: 12px;
    // border: 1px solid black;
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
`;

const Searchmain = styled.div`
    height: auto;
    display: flex;
    margin-right: 10px;
    // border: 1px solid black;
`;

const ProfileIconCont = styled.div`
    max-width: 50px;
    height: auto;
    display: flex;
    margin-right: 10px;
    margin-left: 20px;
    // border: 1px solid black;
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
    // border: 1px solid black;
    margin-right: 12px;
    padding-left: 20px;
`;

const Header = ({profileicon}) =>{
    return <Main>
    
    <Container>

            <MenuCont>
                 <Icon src="/menu.png" />
            </MenuCont>
            
        <Center>
            <Logo>
                <Campused src="/logotext.png"/>
            </Logo>
        </Center>
        

        <FlexEnd>
            <SearchContainer>
                <CircleButton icon="/search.svg" width="28px" height="28px"/>
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