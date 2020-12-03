import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router from 'next/router';


const Contain = styled.div`
    margin: 0;
    width: 100%:
`

const ButtonBox = styled.h6`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 390px;
    
    @media (max-width: 500px){
        min-width:200px;
     }
    min-height: 60px;
    background: ${props=>props.bgcolor ? props.bgcolor : "#FEC601"};
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 0px #18191F;
    border-radius: 10px;
    cursor: pointer;
    padding: 0 30px;

    font-size: ${props=>props.fsize ? props.fsize : "17px"};

`
function clickFurniture() {
    if (true) {
        Router.push("/furniture-market");
    }
}

const Browse_Button = ({bgcolor, text, fsize, onClick}) => {
    return <Contain>
        <ButtonBox onClick={onClick} bgcolor={bgcolor} fsize={fsize}>{text}</ButtonBox>
    </Contain>
}

Browse_Button.defaultProps = {
    bgcolor: "#FEC601",
    text: "Browse more furniture",
    fsize: "17px",
    onClick:()=>{}
}

export default Browse_Button;