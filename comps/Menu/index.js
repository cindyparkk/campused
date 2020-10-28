import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
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

    return <Contain>
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
    </Contain>
}

Menu.defaultProps = {

}

export default Menu;