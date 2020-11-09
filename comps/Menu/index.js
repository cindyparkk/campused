import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Contain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

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
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

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

const Item = styled.h2`
    font-size: 60px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`
function clickNavHome() {
    if (true) {
        Router.push("/home");
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
            <Link href="/home"><Item selected={selected === 1} onClick={()=>{
                setSelected(1);
                clickNavHome;}}>Home</Item></Link>
            <Link href="/about"><Item selected={selected === 2} onClick={()=>{
                setSelected(2);}}>Profile</Item></Link>
            <Link href="/about"><Item selected={selected === 3} onClick={()=>{
                setSelected(3);}}>Messages</Item></Link>
            <Link href="/about"><Item selected={selected === 4} onClick={()=>{
                setSelected(4);}}>About</Item></Link>
            <Link href="/faq"><Item selected={selected === 5} onClick={()=>{
                setSelected(5);}}>FAQ</Item></Link>
        </Content>
    </Contain>
}

Menu.defaultProps = {
    
}

export default Menu;