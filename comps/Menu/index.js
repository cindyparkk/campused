import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Contain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    // display: ${props=>props.showmenu ? "inline-flex" : "none"};
    opacity: ${props=>props.showmenu ? "1" : "0"};
    visibility: ${props=>props.hidden?props.hidden:"hidden"};
    display: inline-flex;
    z-index: 15;
    transition: 0.3s;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

const Open = styled.img`
    width: 28px;
    margin: 20px;
    cursor: pointer;
    display: inline-flex;
`;

const Close = styled.img`
    width: 28px;
    margin: 20px;
    position: fixed;
    cursor: pointer;
    display: ${props=>props.showclose ? "block" : "none"};
    z-index: 20;
`;

const Item1 = styled.h2`
    font-size: 60pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }

    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item2 = styled.h4`
    font-size: 32pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item3 = styled.h2`
    font-size: 60pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    &:active {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item4 = styled.h4`
    font-size: 32pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item5 = styled.h2`
    font-size: 60pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item6 = styled.h4`
    font-size: 32pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item7 = styled.h2`
    font-size: 60pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item8 = styled.h4`
    font-size: 32pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item9 = styled.h2`
    font-size: 60pt;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Item10 = styled.h4`
    font-size: 32pt;  
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

function clickHome(){
    if(true){
        Router.push("/home");
    }
}

function clickAbout(){
    if(true){
        Router.push("/about");
    }
}

function clickProfile(){
    if(true){
        Router.push("/profile");
    }
}

function clickFAQ(){
    if(true){
        Router.push("/faq");
    }
}

function clickMessages(){
    if(true){
        Router.push("/chatlist")
    }
}

const Menu = ({}) => {
    const [selected, setSelected] = useState(1);
    const [hidden, setHidden] = useState(null);

    const [showmenu, SetMenu]  = useState(false);
    const [showclose, setClose] = useState(false);

    return <Contain>
        <Open showclose={showclose} showmenu={showmenu} hidden={hidden} onClick={()=>{
            SetMenu(!showmenu);
            setClose(!showclose);
            setHidden("visible");
            
        }} src='/menu.png'></Open>
        <Close showclose={showclose} showmenu={showmenu} hidden={hidden} onClick={()=>{
            SetMenu(!showmenu);
            setClose(!showclose);
            setHidden("hidden");
        }} src='/close2.png'></Close>


        <Content showmenu={showmenu} showmenu={showmenu} hidden={hidden}>


                {process.browser && window.innerWidth > 650 ? <Item1 selected={selected === 1} onClick={()=>{
                setSelected(1)}, clickHome}>Home</Item1>: null}

                {process.browser && window.innerWidth < 650 ? <Item2 selected={selected === 1} onClick={()=>{
                setSelected(1)}, clickHome}>Home</Item2> : null}



                {process.browser && window.innerWidth > 650 ? <Item3 selected={selected === 2} onClick={()=>{
                setSelected(2);}, clickProfile}>Profile</Item3> : null}

                {process.browser && window.innerWidth < 650 ? <Item4 selected={selected === 2} onClick={()=>{
                setSelected(2);}, clickProfile}>Profile</Item4> : null}



                {process.browser && window.innerWidth > 650 ? <Item5 selected={selected === 3} onClick={()=>{
                setSelected(3);}, clickMessages}>Messages</Item5> :null}

                {process.browser && window.innerWidth < 650 ? <Item6 selected={selected === 3} onClick={()=>{
                setSelected(3);}, clickMessages}>Messages</Item6> :null}



                {process.browser && window.innerWidth > 650 ? <Item7 selected={selected === 4} onClick={()=>{
                setSelected(4);}, clickAbout}>About</Item7>:null}

                {process.browser && window.innerWidth < 650 ? <Item8 selected={selected === 4} onClick={()=>{
                setSelected(4);}, clickAbout}>About</Item8> :null}



                {process.browser && window.innerWidth > 650 ?  <Item9 selected={selected === 5} onClick={()=>{
                setSelected(5);}, clickFAQ}>FAQ</Item9> :null}

                {process.browser && window.innerWidth < 650 ?  <Item10 selected={selected === 5} onClick={()=>{
                setSelected(5);}, clickFAQ}>FAQ</Item10> :null}


        </Content>
    </Contain>
}

Menu.defaultProps = {
    
}

export default Menu;