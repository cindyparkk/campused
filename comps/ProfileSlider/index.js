import React, {useState} from 'react';
import styled from 'styled-components';


const Main = styled.div`
    display: flex;
`;

const SubCont = styled.div`
    width: 100%;
    margin: 0;
`;

const Container = styled.div`
    width: 50%;
    border-bottom: 5px solid #EA7317;
`;

const Listings = styled.h2`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Wishlist = styled.h2`
    cursor: pointer;
    transition: 0.25s;
    :hover{
        color: #EA7317;
    }
    color: ${props=>props.selected ? '#EA7317' : 'black'};
`;

const Text = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const BorderContainer = styled.div`
    width: 100%;
    display: flex;
    transition: 0.5s;
    justify-content: ${props=>props.slider ? 'flex-end' : 'flex-start'};
`;



const ProfileSlider = () =>{
    const [selected, setSelected] = useState(1);
    const [slider, setSlider] = useState(false);

 return <Main>
     <SubCont>

<Text>
 <Listings selected={selected === 1} slider={slider === false} onClick={()=>{
            setSelected(1);
            setSlider(false);
        }}>My Listings</Listings>
    <Wishlist selected={selected === 2} slider={slider === true} onClick={()=>{
            setSelected(2);
            setSlider(true);
        }}>Saved</Wishlist>
    </Text>

<BorderContainer>
    <Container>

    </Container>
    </BorderContainer>

    </SubCont>
    </Main> 
    
}

ProfileSlider.defaultProps = {
   slider: 'flex-start',
   selected: '#EA7317'
}


export default ProfileSlider;