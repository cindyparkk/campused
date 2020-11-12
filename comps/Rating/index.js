import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';

const Cont = styled.div`
  display:flex;
  img {
    width:50px;
    height:50px;
  }
`;

const outlined = "https://image.flaticon.com/icons/png/512/130/130188.png";
const filled = "https://icons-for-free.com/iconfiles/png/512/linecolor+version+svg+stars-1319964495853900697.png";
const Rating = ({numstars, onClick}) => {

  const [stars, setStars] = useState(0);

  useEffect(()=>{
    setStars(numstars);
  }, [numstars]);

  return <Cont>
    <div onClick={()=>{
      setStars(1)
      onClick(1)
    }}>
      <img src={stars !== 0 ? filled : outlined} />
    </div>
    <div>
      <img src={stars > 1 ? filled : outlined} />
    </div>
    <div>
      <img src={outlined} />
    </div>
    <div>
      <img src={outlined} />
    </div>
    <div>
      <img src={outlined} />
    </div>
  </Cont>
}

Rating.defaultProps = {
  onClick:()=>{}
}


export default Rating;