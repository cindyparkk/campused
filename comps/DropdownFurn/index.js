import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display:inline-flex;
    flex-direction:column;
    padding:0px;
`;

const Form = styled.form`

`;

const Select = styled.select`
    display:inline-flex;
    width: 100%;
    min-height: 67px;
    border: ${props=>props.border ? props.border : "2px solid #000000"};
    border-radius: 17px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    font-family: ${props=>props.font ? props.font : "'Assistant', sans-serif"};
    font-weight: ${props=>props.fontweight ? props.fontweight : 300};
    font-size: 15pt;
    background-color: #FFF;

    select > option:hover { 
        background-color: red !important;
    }
`;

const Option = styled.option`

background-color: white;
font-size: 14pt;
font-family: "Assistant", sans-serif;
font-weight: 300;



select > option:hover { 
    background-color: red !important;
}

// min-width: 252px;
// margin-top:5px;
// // background: #FFFFFF;
// border: 2px solid #000000;
// box-sizing: border-box;
// border-radius: 16px;
// box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


const DropdownFurn =({font, name1, name2, name3, name4, border, fontweight})=> {
    return <Container>
        <Form>
            <Select font={font} border={border} fontweight={fontweight}>
                <Option>Select a Category</Option>
                <Option>{name1}</Option>
                <Option>{name2}</Option>
                <Option>{name3}</Option>
                <Option>{name4}</Option>
            </Select>
        </Form>
    </Container>
};

DropdownFurn.defaultProps = {
    font: "'Assistant', sans-serif",
    border: "2px solid black",
    fontweight: 300,
    name1: "Title 1",
    name2: "Title 2",
    name3: "Title 3",
    name4: "Title 4"
}

export default DropdownFurn;