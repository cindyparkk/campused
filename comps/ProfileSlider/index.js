import React, {useState} from 'react';
import styled from 'styled-components';
import ProfilePost from '../ProfilePost';


const Main = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
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
    transition: transform 0.5s;
    justify-content: ${props=>props.slider ? 'flex-end' : 'flex-start'};
`;

const Box = styled.div`
    background-color: ${props=>props.bgcolor ? '#F89C55' : "#FEC601"};
    width: 95%;
    border: 2px solid black;
    margin: 20px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 16px;
    display: inline-flex;
    flex-direction: column;
`


const ProfileSlider = () =>{
    const [selected, setSelected] = useState(1);
    const [slider, setSlider] = useState(false);
    const [bgcolor, setBgColor] = useState(false);


 return <Main>
     <SubCont>

    <Text>
        <Listings selected={selected === 1} slider={slider === false} bgcolor={bgcolor === false} onClick={()=>{
            setSelected(1);
            setSlider(false);
            setBgColor(false);
        }}>My Listings</Listings>
         <Wishlist selected={selected === 2} slider={slider === true} bgcolor={bgcolor === true} onClick={()=>{
            setSelected(2);
            setSlider(true);
            setBgColor(true);
        }}>Saved</Wishlist>
    </Text>

    <BorderContainer selected={selected === 1} slider={slider === true} bgcolor={bgcolor === true} onClick={()=>{
            setSelected(1);
            setSlider(true);
            setBgColor(true);
        }}>
    <Container>

    </Container>
    </BorderContainer>

    </SubCont>
    <Box selected={selected === 1} slider={slider === true} bgcolor={bgcolor === true}>
        <div>
            <ProfilePost />
        </div>
    </Box>
    </Main> 
    
}

ProfileSlider.defaultProps = {
   slider: 'flex-start',
   selected: '#EA7317',
   bgcolor: '#FEC601'
}


export default ProfileSlider;