import React, {useState} from 'react';
import styled from 'styled-components';
import InputPost from '../InputPost';
import SmallCategory from '../SmallCategory';
import UploadImage from '../UploadImage';

const Main = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Container = styled.div`
    background-color: #F2F2F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    width: 100%;
    height: 100%;
    margin: 17px;
    padding: 40px;
    display: inline-flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 80%;
`
const Box = styled.div`
    display: inline-flex;
    flex-direction: column;

    p {
        font-size: 28px;

    }

    div {
        display: inline-flex;
        align-items: center;
        margin: 10px 0;
        
        label {
            font-size: 20px;
            margin-left: 10px;
        }
    }
`

const Text = styled.h1`
    color: black;
    margin-top: 35px;
`;

const Checkbox = styled.input`
    width: 28px;
    height: 28px;
`

const CreateListing = () =>{
 return <Main>
 
 <Container>
    <Content>
        <Text>Create a Listing</Text>
        <InputPost />
        <InputPost title="Price" width="200px" placeholder="$"/>
        <Box>
            <p>Select a Category</p>
            <div>
                <Checkbox type="checkbox" name="leave-in"></Checkbox>
                <label for="leave-in">Leave-in</label>
            </div>
            <div>
                <Checkbox type="checkbox" name="furniture"></Checkbox>
                <label for="furniture">Furniture</label>
            </div>
        </Box>
        <Box>
            <p>Building</p>
            <SmallCategory />
        </Box>
        <InputPost title="Dorm Room Number" width="300px" placeholder="Enter room number"/>
        <Box>
            <p>Description</p>
            <textarea placeholder="Write a description..."></textarea>
        </Box>
    </Content>
</Container>

    </Main>
}



export default CreateListing;