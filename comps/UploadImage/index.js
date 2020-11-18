import React, {useState} from 'react';
import styled from 'styled-components';

// var camera = require('../../public/camera.png');

const Container = styled.div`
    display: flex;
    width: 100%;

    flex-direction:column;

`;

const Title = styled.p`
    font-size: 28px;
`;

const Upload = styled.div`

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    border:solid 1px #000000;
    // width:392px;
    min-width: 200px;
    max-width: 392px;
    height:156px;
    background-color: #FFF;

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

const Mobile = styled.div`
    font-size: 14pt;
    margin-top: 8px;
`;

const UploadImage =({title,camera}) => {

    return <Container>
        <Title>{title}</Title>
        <Upload>
            <Camera>
            <Icon src={camera}/>
            </Camera>
         
            {process.browser && window.innerWidth > 435 ?<p>Upload Photo(s)</p> : <Mobile>Upload Photo(s)</Mobile>}
        </Upload>
    </Container>
}


UploadImage.defaultProps = {
  
    title:"Default",
    camera:"/camera.png"
   
}


export default UploadImage;