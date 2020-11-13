import { Router } from 'next/router';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CircleButton from '../../comps/CircleButton';

const Contain = styled.div`
    position: relative;
`
const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    
    div {
        cursor: pointer;
        padding: 30px 30px;

        font-family: "Assistant", sans-serif;
        font-weight: 300;
        font-size: 24px;

        // padding: ${props=>props.expanded ? "30px 30px" : "0px"};
        &:hover {
            background-color: #FE9A4C;
            color: #FFF;
        }
        &:first-child:hover {
            border-radius: 10px 10px 0px 0px;
        }
        &:nth-child(3):hover{
            border-radius: 0px 0px 10px 10px;
        }
    }
`

const InitialButton = styled.div`
    transition: 0.3s;
    opacity: ${props=>props.expanded ? "0" : "1"};
    display: inline-flex;
`

const Main = styled.div`
    min-width: 216px;
    min-height: 236px;
    position: absolute;
    height: auto;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    // display: inline-flex;
    visibility: ${props=>props.expanded ? "visible" : "hidden"};
    opacity: ${props=>props.expanded ? 1 : 0};
    height: ${props=>props.expanded ? "auto" : "0px"};
`

const ExpandedMenu = ({expand, onMenuSelect}) => {
    const [expanded, setExpanded] = useState(false);
    
    function onMenuSelect(str){
        if (str==="marksold"){
            Router.push("/");
        }
    }

    useEffect(()=>{
        setExpanded(expand);
    }, [expand])

    return <Contain>
        <InitialButton expanded={expanded} onClick={()=>{
            setExpanded(!expanded);
            }}>
            <CircleButton icon='/dropdown.png' iconwidth="5px" iconheight="21px" expanded={expanded}/>
            
        </InitialButton>
        <Main expanded={expanded}>
            <Content>
                <div onClick={()=>{
                onMenuSelect("marksold");}}>Mark as Sold</div>
                <div onClick={()=>{
                onMenuSelect("edit");}}>Edit</div>
                <div onClick={()=>{
                onMenuSelect("delete");}}>Delete</div>
            </Content>
        </Main>
    </Contain>
}

ExpandedMenu.defaultProps = {
    expand: false
}

export default ExpandedMenu;