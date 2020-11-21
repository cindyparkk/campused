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
    min-height: 67px;
    border: 1px solid #000000;
    border-radius: 17px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    background-color: #FFF;
`;

const Option = styled.option`
min-width: 252px;
margin-top:5px;
background: #FFFFFF;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 16px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const DropdownFurn =({})=> {
    return <Container>
        <Form>
            <Select>
                <Option>Select a Category</Option>
                <Option>Bedroom</Option>
                <Option>Kitchen</Option>
                <Option>Bathroom</Option>
                <Option>Living room, General Furniture</Option>
            </Select>
        </Form>
    </Container>
};

export default DropdownFurn;