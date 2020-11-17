import React, {useState} from 'react';
import styled from 'styled-components';
import InputPost from '../InputPost';
import SmallCategory from '../SmallCategory';
import UploadImage from '../UploadImage';
import Button from '../Button';

import axios from 'axios';
import BuildingCategory from '../BuildingCategory';
import Router from 'next/router';

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
        
        label {
            font-size: 20px;
            margin-left: 10px;
        }
    }
`;

const Option = styled.div`
    margin: 10px 0;
`;

const Text = styled.h1`
    color: black;
    margin-top: 35px;
`;

const Checkbox = styled.input`
    width: 28px;
    height: 28px;
`

const CreateListing = ({pageTitle}) =>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [building, setBuilding] = useState("");
    const [desc, setDesc] = useState("");
    const [dormnum, setDormnum] = useState("");
    const [furniture, setFurniture] = useState(false);
    const [leavein, setLeavein] = useState(false);
    const [category, setCategory] = useState("");
    // const [checked, setChecked] = useState(false);

    // const handleFurn = () => setChecked(!furniture);

    const handleFurniture = (str) => {
        if(str === "bed"){
            setCategory("Bedroom");
        } else if (str === "kit"){
            setCategory("Kitchen");
        } else if (str === "bath"){
            setCategory("Bathroom");
        } else if (str === "liv"){
            setCategory("Living room & General Furniture");
        }
    }

    const createPost = async (e)=>{
    
        console.log("clicked", title, price, leavein, furniture, building, category, dormnum, desc);
    
       try{
         console.log("");
          var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/createPost", {
          title: title,
          price: price,
          building: building,
          category: category,
          description: desc,
          dormRoomNumber: dormnum,
          isFurniture: furniture,
          isLeave: leavein
        });
        console.log(resp.data);

        Router.push("/post-sucess");
        
       } catch {
         console.log("Failed");
        //  show error if not everything is filled out
       }

      }
 return <Main>
 
 <Container>
    <Content>
        <Text>{pageTitle}</Text>
        <InputPost onChange={(e)=>{
        setTitle(e.target.value);
      }}/>
        <InputPost title="Price" width="200px" placeholder="$" onChange={(e)=>{
        setPrice(e.target.value);
      }}/>
        <Box>
            <p>Select a Category</p>
            <Option>
                <Checkbox type="checkbox" name="leave-in" onChange={(e)=>{
                    setLeavein(!leavein);
                }}></Checkbox>
                <label for="leave-in">Leave-in</label>
            </Option>
            <Option>
                <Checkbox type="checkbox" name="furniture" onChange={(e)=>{
                    setFurniture(!furniture);
                    // setFurniture(e.target.value);
                }}></Checkbox>
                <label for="furniture">Furniture</label>
            </Option>
        </Box>
        {leavein == true ? <Box>
            <p>Building</p>
            <BuildingCategory onChange={(e)=>{
                setBuilding(e.target.value);
                }}/>
            {/* <InputPost title="Building" onChange={(e)=>{
                setBuilding(e.target.value);
                }}/> */}
        </Box> : null}
        {furniture == true ? <Box>
            <p>Furniture Category</p>
            <SmallCategory onCategorySelect={handleFurniture} onChange={(e)=>{
                setCategory(e.target.value);
                }}/>
            {/* <InputPost title="category" onChange={(e)=>{
                setCategory(e.target.value);
                }}/> */}
        </Box> : null}
        <InputPost title="Dorm Room Number" width="300px" placeholder="Enter room number" onChange={(e)=>{
        setDormnum(e.target.value);
      }}/>
        <UploadImage title="Add Photo(s)"/>
        <Box>
            <p>Description</p>
            <textarea placeholder="Write a description..." onChange={(e)=>{
        setDesc(e.target.value);
      }}></textarea>
        </Box>
        <Button text="Post" fsize="26px" onClick={createPost}/>
    </Content>
</Container>

    </Main>
}

CreateListing.defaultProps = {
    pageTitle: "Create a Listing"
}


export default CreateListing;