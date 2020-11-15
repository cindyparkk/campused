import React, {useState} from 'react';
import styled from 'styled-components';
import InputPost from '../InputPost';
import SmallCategory from '../SmallCategory';
import UploadImage from '../UploadImage';
import Button from '../Button';

import axios from 'axios';

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

const CreateListing = ({pageTitle, onChange}) =>{

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [building, setBuilding] = useState("");
    const [desc, setDesc] = useState("");
    const [dormnum, setDormnum] = useState("");
    const [furniture, setFurniture] = useState(false);
    const [leavein, setLeavein] = useState(false);

    const createPost = async (e)=>{
    
        console.log("clicked", e, price, title, building, desc, dormnum, furniture);
    
       try{
         console.log("");
          var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/createPost", {
          title: title,
          price: price,
          building: building,
          desc: desc,
          dormnum: dormnum,
          furniture: furniture,
          leavein: leavein
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
        {/* <InputPost onChange={(e)=>{
        setTitle(e.target.value);
      }}/>
        <InputPost title="Price" width="200px" placeholder="$" onChange={(e)=>{
        setPrice(e.target.value);
      }}/> */}
        <Box>
            <p>Select a Category</p>
            <div>
                <Checkbox type="checkbox" name="leave-in" onChange={(e)=>{
        setLeavein(e.target.value);
      }}></Checkbox>
                <label for="leave-in">Leave-in</label>
            </div>
            <div>
                <Checkbox type="checkbox" name="furniture" onChange={(e)=>{
        setFurniture(e.target.value);
      }}></Checkbox>
                <label for="furniture">Furniture</label>
            </div>
        </Box>
        <Box>
            <p>Building</p>
            <SmallCategory />
        </Box>
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
    pageTitle: "Create a Listing",
    onChange:()=>{}
}


export default CreateListing;