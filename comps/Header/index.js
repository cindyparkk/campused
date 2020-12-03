import React, {useState} from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import CircleButton from '../CircleButton';
import Menu from '../Menu';

import axios from 'axios';


const Main = styled.div`
    background-color: white;
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
    z-index: 1;
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
    z-index: 1;
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
    z-index: 1;
`;

const FlexEnd = styled.div`
    z-index: 1;
    margin-left: auto;
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
        console.log("clicked");
        Router.push("/profile");
    }
}

function clickHome(){
    if (true){
        Router.push("/home");
    }
}

const Header = ({imgurl}) =>{

   const [textColor, setTextColor] = useState(false);
   const [textColor2, setTextColor2] = useState(false);

    const HandleMenu = (str) =>{
        if(str==="home"){
            setTextColor("#EA7317");
        } else if (str === "profile"){
            setTextColor2("#EA7317");
        }
    }
    const [img, setImg] = useState(null);
    // add async in comp is okay??? not okay??
    const handleProfile = async () => {
        var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user/image");

        // console.log(resp.data);
        setImg(resp.data.image);
    }
    return <Main>
    <Center>
            <Logo onClick={clickHome}>
                <Campused src="/logotext.png"/>
            </Logo>
        </Center>
    <Container>

           <MenuCont> <Menu textColor={textColor} textColor2={textColor2} MenuSelect={HandleMenu} /> </MenuCont>
   
        <FlexEnd>
            <SearchContainer onClick={clickSearch}>
                <CircleButton icon="/search.svg" width="32px" height="32px"/>
            </SearchContainer>
            <Profile src={imgurl} onClick={clickProfile}/>
        </FlexEnd>

    </Container>

    
   </Main>
   }

   
   Header.defaultProps = {
       imgurl: "/profileicon.jpg"
   }

   
   export default Header;