import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import CreateListing from '../../comps/CreateListing';
import InputPost from '../../comps/InputPost';
import SmallCategory from '../../comps/SmallCategory';
import BuildingCategory from '../../comps/BuildingCategory';
import UploadImage from '../../comps/UploadImage';
import Button from '../../comps/Button';
import DropdownFurn from '../../comps/DropdownFurn';

import Router from 'next/router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import UploadImager from "./UploadImage";
if (process.browser){
  const token = localStorage.FBIdToken

if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
}
}

export default function CreateAListing() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [building, setBuilding] = useState("category");
  const [desc, setDesc] = useState("");
  const [dormnum, setDormnum] = useState("category");
  const [furniture, setFurniture] = useState(false);
  const [leavein, setLeavein] = useState(false);
  const [category, setCategory] = useState("category");
  const [imageUrl, setImageUrl] = useState('something');

  const handleFurniture = (str) => {
    if(str === "bed"){
        setCategory("Bedroom");
    } else if (str === "kit"){
        setCategory("Kitchen");
    } else if (str === "bath"){
        setCategory("Bathroom");
    } else if (str === "liv"){
        setCategory("Living room & General Furniture");
    } else {
      str === "furniture";
    }
}

  const createPost = async (e)=>{
  
    console.log("clicked", title, price, leavein, furniture, building, category, dormnum, desc, imageUrl);
    
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
       isLeave: leavein,
       imageUrls: imageUrl
     });
     console.log(resp.data);

     Router.push("/post-success");
     
    } catch {
      console.log("Failed");
     //  show error if not everything is filled out
    }

    }
  
  return  <div className="page">
      <Header />
      <HeaderMenu />
     
      <div className="page_contents">
        {/* <CreateListing /> */}
        <div className="create_listing">
        <div className="listing_contents">
        
          <h1>Create a Listing</h1>
          <InputPost width="90%" onChange={(e)=>{
            setTitle(e.target.value);
          }}/>
          <InputPost title="Price" width="150px" placeholder="$" onChange={(e)=>{
            setPrice(e.target.value);
          }}/>

          <div className="listing_box">
            <p>Select a Category</p>
            <div className="checkbox_options">
              <input type="checkbox" name="leave-in" className="checkbox" onChange={(e)=>{
                      setLeavein(!leavein);
              }}/>
              <label for="leave-in">Leave-in</label>
            </div>
            <div className="checkbox_options">
              <input type="checkbox" name="furniture" className="checkbox" onChange={(e)=>{
                    setFurniture(!furniture);
                    // setFurniture(e.target.value);
                }}/>
              <label for="furniture">Furniture</label>
            </div>

            {leavein == true ? <div className="listing_box">
              <p>Building</p>
              {/* <BuildingCategory onChange={(e)=>{
                  setBuilding(e.target.value);
                  }}/> */}
                  <div className="categorydiv">
               <DropdownFurn title={"Select the building"} name1={"Brock Hall"} name2={"Walter Gage"} name3={"Ponderosa"} name4={"Thunderbird"} border={"1px solid black"}/>
                </div>
              {/* <InputPost title="Building" onChange={(e)=>{
                  setBuilding(e.target.value);
                  }}/> */}
            </div> : null}

            {furniture == true ? <div className="listing_box">
              <p>Furniture Category</p>
              {/* <SmallCategory onCategorySelect={handleFurniture} onChange={(e)=>{
                setCategory(e.target.value);
                }}/> */}
            {/* <InputPost title="category" onChange={(e)=>{
                setCategory(e.target.value);
                }}/> */}
                <div className="categorydiv">
                <DropdownFurn border={"1px solid black"}/>
            </div> </div> : null}

            {leavein == true ? <InputPost title="Dorm Room Number" width="300px" placeholder="Enter room number" onChange={(e)=>{
              setDormnum(e.target.value);
            }}/> : null}
            
           {/* <UploadImager setImageUrl={setImageUrl} /> */}
            <UploadImage title="Add Photo(s)"/>

            <div className="listing_box">
              <p>Description</p>
              <textarea placeholder="Write a description..." onChange={(e)=>{
                setDesc(e.target.value);
              }}></textarea>
            </div>

            <Button text="Post" fsize="26px" onClick={createPost}/>
          </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
}