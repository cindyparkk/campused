import React, {useState} from 'react';
import styled from 'styled-components';

import camera from '../../public/camera.png';

const Container = styled.div`
    display: flex;
    width: 100%;
    font-family: 'Assistant', sans-serif;
    flex-direction:column;

`;

const Title = styled.h4`
    margin:0;
`;

const Upload = styled.div`

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    border:solid 1px #000000;
    width:392px;
    height:156px;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top:15px;
    opacity:0.6;
    
`;

const Icon = styled.div`
    width: 25%;
    display: inline-block;
    background-size: cover;
    background-position: center;
    padding: 20px;
    cursor: pointer;

`;

const UploadImage =({text1}) => {

    return <Container>
        <Title>{text1}</Title>
        <Upload>
           <Icon src={camera}></Icon> 
           <p>Upload Photo(s)</p>
        </Upload>
    </Container>
}


UploadImage.defaultProps = {
  
    text1:"Default"
   
}


export default UploadImage;