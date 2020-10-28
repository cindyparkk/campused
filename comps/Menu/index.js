import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Item = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-size: 60px;
    cursor: pointer;

    &:hover {
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`

const Menu = ({}) => {
    const [selected, setSelected] = useState(false);

    return <Contain>
        <Item selected={selected} onClick={()=>{
            setSelected(!selected);}}>Home</Item>
        <Item selected={selected} onClick={()=>{
            setSelected(!selected);}}>Profile</Item>
        <Item>Wishlist</Item>
        <Item>Messages</Item>
        <Item>About</Item>
    </Contain>
}

Menu.defaultProps = {

}

export default Menu;