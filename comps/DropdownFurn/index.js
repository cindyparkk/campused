import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    min-width: 252px;
    display:inline-flex;
    flex-direction:column;
    padding:0px;
`;

const Form = styled.form`

`;

const Select = styled.select`
    display:inline-flex;
    width: 250px;
    min-height: 67px;
    border: ${props=>props.border ? props.border : "2px solid #000000"};
    border-radius: 17px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    font-family: ${props=>props.font ? props.font : "'Assistant', sans-serif"};
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


const DropdownFurn =({text, font, name1, name2, name3, name4, border, onChange, onCategorySelect})=> {
    return <Container>
        <Form>
            <Select font={font} border={border} onChange={onChange}>
                <Option>{text}</Option>
                <Option onClick={()=> {
            onCategorySelect("option1");}}>{name1}</Option>
                <Option onClick={()=> {
            onCategorySelect("option2");}}>{name2}</Option>
                <Option onClick={()=> {
            onCategorySelect("option3");}}>{name3}</Option>
                <Option onClick={()=> {
            onCategorySelect("option4");}}>{name4}</Option>
            </Select>
        </Form>
    </Container>
};

DropdownFurn.defaultProps = {
    text: "Select a Category",
    font: "'Assistant', sans-serif",
    border: "2px solid black",
    name1: "Bedroom",
    name2: "Bathroom",
    name3: "Kitchen",
    name4: "Living Room & General Furniture",
    onChange:()=>{}
}

export default DropdownFurn;