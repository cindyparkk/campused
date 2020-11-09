import React, {useState} from 'react';
import styled from 'styled-components';

// var camera = require('../../public/camera.png');

const Container = styled.div`
    display: flex;
    width: 100%;

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
    
        p{
            opacity:0.7;
        }

`;

const Camera = styled.div`
    width:100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
  
    display: inline-block;
    background-size: cover;
    background-position: center;
    cursor: pointer;

`;

const UploadImage =({text1,camera}) => {

    return <Container>
        <Title>{text1}</Title>
        <Upload>
            <Camera>
            <Icon src={camera}/>
            </Camera>
         
           <p>Upload Photo(s)</p>
        </Upload>
    </Container>
}


UploadImage.defaultProps = {
  
    text1:"Default",
    camera:"/camera.png"
   
}


export default UploadImage;