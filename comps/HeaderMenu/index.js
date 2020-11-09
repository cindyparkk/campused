import React, {useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Main = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    z-index: 0;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

`;

const LeaveIn = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Furniture = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected2 ? '#EA7317' : 'black'};
`;

const Wishlist = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected3 ? '#EA7317' : 'black'};
`;

function clickLeavein(){
    if(true){
        setTimeout(function (){
            Router.push("/leave-in");
        }, 600)
    }
}

function clickFurniture(){
    if(true){
        Router.push("/furniture-market");
    }
}

const HeaderMenu = ({}) =>{
    const [selected, setSelected] = useState(1);

    return <Main>
    
        <Container>

        <Link href="/leave-in"><LeaveIn selected={selected === 1} onClick={()=>{
            setSelected(1);
        }}>Leave-in's</LeaveIn></Link>
        <Link href="/furniture-market"><Furniture selected2={selected === 2} onClick={()=>{
            setSelected(2);
        }}>Furniture</Furniture></Link>
        <Wishlist selected3={selected === 3} onClick={()=>{
            setSelected(3);
        }}>Wishlist</Wishlist>

    </Container>
    
   </Main>

   }

   HeaderMenu.defaultProps = {
      
   }
   
   
   export default HeaderMenu;