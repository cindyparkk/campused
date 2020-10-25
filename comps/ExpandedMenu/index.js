import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Contain = styled.div`
    min-width: 216px;
    min-height: 236px;
    height: auto;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    display: inline-flex;
    // display: ${props=>props.expanded ? "inline-flex" : "hidden"};
    // opacity: ${props=>props.expanded ? 1 : 0};
    // height: ${props=>props.expanded ? "auto" : "0px"};
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

const ExpandedMenu = ({expand, onMenuSelect}) => {
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setExpanded(expand)
    }, [expand])

    return <Contain expanded={expanded}>
        <Content>
            <div onClick={()=>{
            onMenuSelect("marksold");}}>Mark as Sold</div>
            <div onClick={()=>{
            onMenuSelect("edit");}}>Edit</div>
            <div onClick={()=>{
            onMenuSelect("delete");}}>Delete</div>
        </Content>
    </Contain>
}

ExpandedMenu.defaultProps = {
    expand: false
}

export default ExpandedMenu;