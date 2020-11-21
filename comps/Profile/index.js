import React, {useState} from 'react';
import styled from 'styled-components';

import axios from 'axios';
import Router from 'next/router';

const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    max-width: 150px;
    max-height: auto;
    margin: 0px 130px 0px 130px;
`;

const Name = styled.h1`
    margin: 10px 0;
`;

const PFP = styled.img`
    border-radius: 50%;
    height: 100%;
    width: 100%;
`;



const Profile = ({name, icon, onChange}) =>{

    return <Main onChange={onChange}>

    <Container>
        <PFP src= {icon} />
    </Container>
   
    <Name>{name}</Name>

   </Main>
   }

   Profile.defaultProps = {
      name:'My Name',
      icon: '/profileicon.jpg',
      onChange:()=>{}
   }
   
   
   
   export default Profile;