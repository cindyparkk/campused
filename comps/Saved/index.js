import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import CircleButton from '../CircleButton';

const Main = styled.div`
   display: inline-block;
   position: absolute;
   justify-content: flex-end;
`;

const Icon = styled.img`
    width: 33px;
    height: 33px;
    position: absolute;
    top: 19%;
    left: 19%;
    display: ${props=>props.savedselected ? "flex" : "none"};
`;

const IconContainer = styled.div`
    width: 100%;
    justify-content: flex-end;
    display: flex;
    margin-bottom: 10px;
`;

const Added = styled.img`
    width: 100%;
    height: 100%;
`;

const Text = styled.p`
    font-size: 12pt;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
`;

const AddedContainer = styled.div`
    max-width: 200px;
    position: relative;
    transition: opacity 3s;
    visibility: ${props=>props.message ? "visible" : "hidden"};
    opacity: ${props=>props.fade ? "0" : "1"};
`;

const Icons = styled.div`
    position: relative;
`;

const CircleButtonCont = styled.div`
    display: inline-flex;
`;

const Saved = () =>{
    const [savedselected, clickSaved] = useState(false);
    const [message, addedMessage] = useState(false);
    // const [fade, fadeOut] = useState(false);

    // useEffect(() => {
    //     const fade = setTimeout(() => {
    //        alert('hey');
    //      }, 3000);
    //    },[]);

 return <Main>


    <IconContainer>
        <Icons>
            <CircleButtonCont message={message} savedselected={savedselected} onClick={()=>{
            clickSaved(!savedselected);
            addedMessage(!message);
            // setTimeout();
        }}>
        <CircleButton icon='/saved.svg' iconwidth='32px' iconheight='32px'
        />
        </CircleButtonCont>
        <Icon savedselected={savedselected} onClick={()=>{
            clickSaved(!savedselected);
        }} src='/savedselected.png' />
        </Icons>
     </IconContainer>

    <AddedContainer message={message} onClick={()=>{
            addedMessage(!message);
        }}>
     <Added src='/addedtosaved.png' />
     <Text>Added to Saved Listings</Text>
     </AddedContainer>

     
    </Main> 
    
}



Saved.defaultProps = {
    savedselected: 'none',
    message: 'none',
    fade: '1'
}


export default Saved;