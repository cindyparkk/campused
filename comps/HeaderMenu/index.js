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

const LeaveIn2 = styled.h4`
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

const Furniture2 = styled.h4`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected2 ? '#EA7317' : 'black'};
`;


const Saved = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected3 ? '#EA7317' : 'black'};
`;

const Saved2 = styled.h4`
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

function clickSaved(){
    if(true){
        Router.push("/wishlist");
    }
}



const HeaderMenu = ({fontSize}) =>{
    const [selected, setSelected] = useState(1);
    const [state, setState] = useState(false);

    return <Main>
    
        <Container>
        
        {process.browser && window.innerWidth > 630 ? <Link href="/leave-in">
            <LeaveIn selected={selected === 1} onClick={()=>{
            setSelected(1);
        }}>Leave-in's</LeaveIn> 
        </Link>: null}
        

        
        {process.browser && window.innerWidth < 630 ? <Link href="/leave-in">
            <LeaveIn2 selected={selected === 1} onClick={()=>{
            setSelected(1);
        }}>Leave-in's</LeaveIn2> 
        </Link>: null}
        

        
        {process.browser && window.innerWidth > 630 ? <Link href="/furniture-market">
                <Furniture selected2={selected === 2} onClick={()=>{
                setSelected(2);
            }}>Furniture</Furniture>
            </Link>: null}
                

       
        {process.browser && window.innerWidth < 630 ? <Link href="/furniture-market">
                <Furniture2 selected2={selected === 2} onClick={()=>{
                setSelected(2);
            }}>Furniture</Furniture2>
            </Link>: null}
         

        
        {process.browser && window.innerWidth > 630 ? <Link href="/wishlist">
        <Saved selected3={selected === 3} onClick={()=>{
            setSelected(3);
        }}>Saved</Saved> 
        </Link>: null}

        

        
        {process.browser && window.innerWidth < 630 ? <Link href="/wishlist">
       <Saved2 selected3={selected === 3} onClick={()=>{
            setSelected(3);
        }}>Saved</Saved2>: 
             </Link> : null}

       



        

    </Container>
    
   </Main>

   }

   HeaderMenu.defaultProps = {
      
   }
   
   
   export default HeaderMenu;