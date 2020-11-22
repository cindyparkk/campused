import React, {useState} from 'react';
import styled from 'styled-components';
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
    // color: ${props=>props.selected ? '#EA7317' : 'black'};
    color: ${props=>props.leaveintextcolor ? props.leaveintextcolor : "black"};
`;

const LeaveIn2 = styled.h4`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    // color: ${props=>props.selected ? '#EA7317' : 'black'};
    color: ${props=>props.leaveintextcolor ? props.leaveintextcolor : "black"};
`;

const Furniture = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    // color: ${props=>props.selected2 ? '#EA7317' : 'black'};
    color: ${props=>props.furnituretextcolor ? props.furnituretextcolor : "black"};
`;

const Furniture2 = styled.h4`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    // color: ${props=>props.selected2 ? '#EA7317' : 'black'};
    color: ${props=>props.furnituretextcolor ? props.furnituretextcolor : "black"};
`;


const Saved = styled.h3`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    // color: ${props=>props.selected3 ? '#EA7317' : 'black'};
    color: ${props=>props.savedtextcolor ? props.savedtextcolor : "black"};
`;

const Saved2 = styled.h4`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    // color: ${props=>props.selected3 ? '#EA7317' : 'black'};
    color: ${props=>props.savedtextcolor ? props.savedtextcolor : "black"};
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
        Router.push("/saved");
    }
}



const HeaderMenu = ({fontSize, leaveintextcolor, furnituretextcolor, savedtextcolor}) =>{
    const [selected, setSelected] = useState(1);
    const [state, setState] = useState(false);

    return <Main>
    
        <Container>
        
        {process.browser && window.innerWidth > 630 ? 
            <LeaveIn selected={selected === 1} leaveintextcolor={leaveintextcolor} onClick={()=>{
            // setSelected(1); 
            clickLeavein();
        }}>Leave-in's</LeaveIn> : null}
        

        
        {process.browser && window.innerWidth < 630 ?
            <LeaveIn2 selected={selected === 1} leaveintextcolor={leaveintextcolor} onClick={()=>{
            // setSelected(1);
            clickLeavein();
        }}>Leave-in's</LeaveIn2>: null}
        

        
        {process.browser && window.innerWidth > 630 ? 
                <Furniture selected2={selected === 2} furnituretextcolor={furnituretextcolor} onClick={()=>{
                // setSelected(2);
                clickFurniture();
            }}>Furniture</Furniture>: null}
                

       
        {process.browser && window.innerWidth < 630 ? 
                <Furniture2 selected2={selected === 2} furnituretextcolor={furnituretextcolor} onClick={()=>{
                // setSelected(2);
                clickFurniture();
            }}>Furniture</Furniture2>: null}
         

        
        {process.browser && window.innerWidth > 630 ?
        <Saved selected3={selected === 3} savedtextcolor={savedtextcolor} onClick={()=>{
            // setSelected(3);
            clickSaved();
        }}>Saved</Saved> : null}

        

        
        {process.browser && window.innerWidth < 630 ? 
       <Saved2 selected3={selected === 3} savedtextcolor={savedtextcolor} onClick={()=>{
            // setSelected(3);
            clickSaved();
        }}>Saved</Saved2>: null}

       



        

    </Container>
    
   </Main>

   }

   HeaderMenu.defaultProps = {
      leaveintextcolor: "black",
      furnituretextcolor: "black",
      savedtextcolor: "black"
   }
   
   
   export default HeaderMenu;