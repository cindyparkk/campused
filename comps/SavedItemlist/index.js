import React, {useState} from 'react';
import styled from 'styled-components';
import SavedItem from '../SavedItem';


const Main = styled.div`
    display: flex;
    width: 100%;
    // justify-content: center;
    flex-direction: column;
    background-color: #EA7317;
    width: 95%;
    border: 2px solid black;
    margin: 20px;
    padding: 30px;
    box-sizing: border-box;
    // align-items: center;
    border-radius: 16px;
    display: inline-flex;
    // justify-content: center;
`;



const Header = styled.h3`
  color:#FFFFFF;
  margin:20px;
  text-align:left;
 
`;


const BoxContent = styled.div`
    display: flex;
    align-items: center;
    width:100%;
    justify-content: center;
`

const SavedItemlist = ({}) =>{



 return <Main>
     
         <Header>Saved</Header>
         <BoxContent>
            <SavedItem />
            <img src="closeicon.png"></img>
        </BoxContent>

        <BoxContent>
            <SavedItem />
            <img src="closeicon.png"></img>
            
        </BoxContent>
     
    </Main> 
    
}

SavedItemlist.defaultProps = {

}


export default SavedItemlist;