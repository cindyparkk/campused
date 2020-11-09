import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

// var arrow = require('../../public/arrowdown.png');


const Container = styled.div`
width: 100%;
font-weight:bold;
font-size:24px;
display:inline-flex;
flex-direction:column;
`;

const DropDownMenu = styled.div`
    display:inline-flex;
    justify-content:space-between;
    border: 2px solid #000000;
    border-radius: 16px;
    padding:5px 10px;
    max-height: 71px;
    min-width: 321px;
`;

const DropDownBox = styled.div`
    padding:10px;
    display:inline-flex;
    align-items: center;
    justify-content:space-between;
    width: 100%;
`;

const Arrow = styled.img`
    max-width: 29px;
    height: auto;
    transform: ${props=>props.expanded ? "rotate(180deg)" : "none"};
`;

const Expand = styled.div`

min-width: 570px;

margin-top:5px;
background: #FFFFFF;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 16px;

margin-bottom:15px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // width:100%;
    // padding:10px;
    height: 100%;

    display:${props=>props.expanded ? "inline-flex" : "hidden"};
    max-height:${props=>props.expanded ? "auto" : "0px"};
    font-size:${props=>props.expanded ? "24px" : "0px"};
    opacity:${props=>props.expanded ? 1 : 0};

    transition:opacity 0.3s;
    flex-direction: column;

    div{
        &:hover{
            background-color:#FE9A4C;
        }
         
        &:first-child:hover {
            border-radius: 14px 14px 0px 0px;
        }
        &:nth-child(4):hover{
            border-radius: 0px 0px 14px 14px;
        }
        
        padding:20px;
        // margin:10px;
    
        // margin:${props=>props.expanded ? "10px" : "0px"};
        cursor:pointer;
    }
`;
const Title = styled.h4`
    white-space: nowrap;
`

const Category =({expand,onCategorySelect,arrow,name1,name2,name3,name4,title})=> {
        const [expanded, setExpanded] = useState(false);

        function onCategorySelect(str){
            if (str==="bed"){
                Router.push("/");
            }
        }

        useEffect(() => {
            setExpanded(expand);
        },[expand])

    return <div>
    <Container>
        <DropDownMenu onClick={() => { 
            setExpanded(!expanded);
        }}>
            <DropDownBox>
                <Title>{title}</Title>
                    <Arrow src={arrow} expanded={expanded}/>
            </DropDownBox>
        </DropDownMenu>
        <Expand expanded={expanded}>

            <div onClick={()=> {
                onCategorySelect("bed");}}>
                {name1}</div>

             <div onClick={()=> {
                onCategorySelect("kit");}}>
                {name2}</div>
             <div onClick={()=> {
                onCategorySelect("bath");}}>
                {name3}</div>
            <div onClick={()=> {
                onCategorySelect("liv");}}>
                {name4}</div>
        </Expand>
    </Container>
    </div>
}


Category.defaultProps = {

expand:false,
arrow:"/arrowdown.png",
name1:"Bedroom",
name2:"Kitchen",
name3:"Bathroom",
name4:"Living room & General Furniture",
title:"Choose a Category"

}

export default Category;