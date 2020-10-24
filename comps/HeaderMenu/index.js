import React, {useState} from 'react';
import styled from 'styled-components';

const Main = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

const LeaveIn = styled.h2`
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Furniture = styled.h2`
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected2 ? '#EA7317' : 'black'};
`;

const Wishlist = styled.h2`
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected3 ? '#EA7317' : 'black'};
`;


const HeaderMenu = ({}) =>{
    const [selected, setSelected] = useState(false);
    const [selected2, setSelected2] = useState(false);
    const [selected3, setSelected3] = useState(false);

    return <Main>
    
        <Container>

            <LeaveIn selected={selected} onClick={()=>{
            setSelected(!selected);
            setSelected2(false);
            setSelected3(false);
        }}>Leave-in's</LeaveIn>
            <Furniture selected2={selected2} onClick={()=>{
            setSelected2(!selected2);
            setSelected(false);
            setSelected3(false);
        }}>Furniture</Furniture>
            <Wishlist selected3={selected3} onClick={()=>{
            setSelected3(!selected3);
            setSelected(false);
            setSelected2(false);
        }}>Wishlist</Wishlist>

    </Container>
    
   </Main>

   }

   HeaderMenu.defaultProps = {
      
   }
   
   
   export default HeaderMenu;