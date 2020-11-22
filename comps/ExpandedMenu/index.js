import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CircleButton from '../../comps/CircleButton';
import Router from 'next/router';

const Contain = styled.div`
    position: relative;
    z-index: 6;
`;
const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    z-index: 6;
    
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
    // top: ${props=>props.expanded ? "0" : ""};
    // left: ${props=>props.expanded ? "-100px" : ""};
    height: auto;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    right: 0;
    top: 0;
    // display: inline-flex;

    visibility: ${props=>props.expanded ? "visible" : "hidden"};

    opacity: ${props=>props.expanded ? 1 : 0};
    height: ${props=>props.expanded ? "auto" : "0px"};
    transition: 0.3s;
`;

const CloseBackground = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    visibility: ${props=>props.visibilityback ? "visibile" : "hidden"};
`;

const ExpandedMenu = ({expand, onMenuSelect, sold}) => {
    const [expanded, setExpanded] = useState(false);
    const [visibilityback, setVisibilityBack] = useState(false);
    const [state, setState] = useState(0);
    const [text, setText] = useState("Mark as Sold");

    useEffect(()=>{
        setExpanded(expand);
    }, [expand]);

    // const handleSold = () => {
    //     if(sold === true){
    //         setText("Undo");
    //     } else {
    //         setText();
    //     }
    // }
    

    return <Contain >
        <InitialButton expanded={expanded} visibilityback={visibilityback} onClick={()=>{
            setExpanded(!expanded);
            setVisibilityBack(true);
            }}>
            <CircleButton icon='/dropdown.png' iconwidth="5px" iconheight="21px" expanded={expanded}/>
            
        </InitialButton>
        <CloseBackground expanded={expanded} visibilityback={visibilityback} onClick={()=>{
            setExpanded(false);
            setVisibilityBack(false);
        }}></CloseBackground>
        <Main expanded={expanded}>
            <Content>
                <div sold={sold} onClick={()=>{
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