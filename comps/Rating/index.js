import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const Cont = styled.div`
  display:flex;
  img {
    width: ${props=>props.width ? props.width : "40px"};
    height: ${props=>props.height ? props.height : "40px"};
    margin-right: 5px;
    cursor: pointer;
  }
`;



const empty = '/starempty.png';
const filled = "/star.png";



const Rating = ({numstars, onClick, width, height}) => {

  const [stars, setStars] = useState(0);

  useEffect(()=>{
    setStars(numstars);
  }, [numstars]);

  return <Cont width={width} height={height}>
    <div onClick={()=>{
      setStars(1);
      onClick(1);
    }}>
      <img src={stars !== 0 ? filled : empty} />
    </div>
    <div onClick={()=>{
      setStars(2);
      onClick(2);
    }}>
      <img src={stars > 1 ? filled : empty} />
    </div>
    <div onClick={()=>{
      setStars(3);
      onClick(3);
    }}>
      <img src={stars > 2 ? filled : empty} />
    </div>
    <div onClick={()=>{
      setStars(4);
      onClick(4);
    }}>
      <img src={stars > 3 ? filled : empty} />
    </div>
    <div onClick={()=>{
      setStars(5);
      onClick(5);
    }}>
      <img src={stars > 4 ? filled : empty} />
    </div>
  </Cont>
}

Rating.defaultProps = {
  onClick:()=>{},
  width: "40px",
  height: "40px"
}


export default Rating;