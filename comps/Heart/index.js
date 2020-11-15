import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Cont = styled.div`
    display: flex;
    margin:50px;
  img {
    width:40px;
    height:40px;
    margin-right: 5px;
    cursor: pointer;
   
  }
`;

const Message = styled.img`
min-width: 140px;
display:${props=>props.expanded ? "inline-flex" : "none"};
max-height:${props=>props.expanded ? "auto" : "0px"};

opacity:${props=>props.expanded ? 1 : 0};

`;

const empty = '/emptyheart.png';
const filled = "/fillheart.png";



const Heart = ({numstars, onClick}) => {

  const [heart, setHeart] = useState(0);

  useEffect(()=>{
    setHeart(numstars);
  }, [numstars])

  const [message, setMsg] = useState(false);


  useEffect(()=>{
      setMsg(heart);
  },[heart])
      


  return <Cont>
    <div onClick={()=>{
        setHeart(0);
      onClick(0);
      setMsg(!message);
  
    }}>
      <img src={heart !== 0 ? empty : filled } />
    </div>
    
    <Message message={message} src="addedtosaved.png">

    </Message>
  </Cont>
}

Heart.defaultProps = {
  onClick:()=>{},
  message:false
}


export default Heart;