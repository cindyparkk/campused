import React, {useState} from 'react';
import styled from 'styled-components';

import logo from '../../public/logotext.png';
import hamburgermenu from '../../public/menu.png';
import CircleButton from '../../comps/CircleButton';
import search from '../../public/search.svg';
import profileicon from '../../public/profileicon.jpg';

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
    max-width: 150px;
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

const Header = () =>{
    return <Main>
    
        <Container>

            <MenuCont>
                 <Icon src={hamburgermenu} />
            </MenuCont>
            
            <Center>
        <Logo>
            <Campused src={logo}/>
        </Logo>
    </Center>
        

<FlexEnd>


   
        <SearchContainer>
            <CircleButton icon={search} />
        </SearchContainer>
   

        <ProfileIconCont>
            <Profile src={profileicon} />
        </ProfileIconCont>

</FlexEnd>

    </Container>

    
   </Main>
   }

   
   
   export default Header;