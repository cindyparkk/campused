import React, {useState, useEffect} from 'react';
import styled from 'styled-components';


const Contain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    display: ${props=>props.showmenu ? "inline-flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
`

const Open = styled.img`
    width: 28px;
    margin: 20px;
    cursor: pointer;
`

const Close = styled.img`
    width: 28px;
    margin: 20px;
    position: fixed;
    cursor: pointer;
    z-index: 12;
    display: ${props=>props.showclose ? "block" : "none"};
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

const Menu = ({}) => {
    const [selected, setSelected] = useState(1);
    const [appear, setAppear] = useState(false);

    const [showmenu, SetMenu]  = useState(false);
    const [showclose, setClose] = useState(false);

    return <Contain>
        <Open showmenu={showmenu} showclose={showclose} onClick={()=>{
            SetMenu(!showmenu);
            setClose(!showclose);
        }} src='/menu.png'></Open>
        <Close showclose={showclose} showmenu={showmenu} onClick={()=>{
            SetMenu(!showmenu);
            setClose(!showclose);
        }} src='/close2.png'></Close>
        <Content showmenu={showmenu}>
            <Item selected={selected === 1} onClick={()=>{
                setSelected(1);}}>Home</Item>
            <Item selected={selected === 2} onClick={()=>{
                setSelected(2);}}>Profile</Item>
            <Item selected={selected === 3} onClick={()=>{
                setSelected(3);}}>Wishlist</Item>
            <Item selected={selected === 4} onClick={()=>{
                setSelected(4);}}>Messages</Item>
            <Item selected={selected === 5} onClick={()=>{
                setSelected(5);}}>About</Item>
        </Content>
    </Contain>
}

Menu.defaultProps = {
    display: 'none'
}

export default Menu;