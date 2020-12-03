import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import CreateListing from '../../comps/CreateListing';
import InputPost from '../../comps/InputPost';
import SmallCategory from '../../comps/SmallCategory';
import BuildingCategory from '../../comps/BuildingCategory';
import Alert from '../../comps/Alert';
import Button from '../../comps/Button';
import DropdownFurn from '../../comps/DropdownFurn';

import Router from 'next/router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

if (process.browser){
  const token = localStorage.FBIdToken

  if(token) {
  const decodedToken = jwtDecode(token);
  // console.log(decodedToken);
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
  const [error, setError] = useState(false);

  const [file, setFile] = useState(null);

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


const handleCategory = (str) => {
    if (leavein === false && furniture === true){
    setCategory(category);

    } else {
      setCategory("empty");
    }
    
}

  const createPost = async (e)=>{
  
    console.log("clicked", title, price, leavein, furniture, building, category, dormnum, desc, imageUrl);

    if (title || price || building || dormnum || desc || category || imageUrl == ""){
      Router.push("/create-a-listing");
      window.scrollTo(0, 0);
      setError(true);
    } else {
      setError(false);
      var fd = new FormData();
      fd.append("image", file);
      // console.log(fd, file);
      const resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/post/image", fd, {
      headers: { 'Content-Type': 'application/json'}})
        // console.log(resp);
      const resp2 = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/createPost", {
          title: title,
          price: price,
          building: building,
          category: category,
          description: desc,
          dormRoomNumber: dormnum,
          isFurniture: furniture,
          isLeave: leavein,
          imageUrls: resp.data.imageUrl
      })
      const resultsAll = [resp, resp2];
      
        // console.log(resultsAll);

        Router.push("/post-success");

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
              <DropdownFurn title={"Select the building"} name1={"Brock Hall"} name2={"Walter Gage"} 
              name3={"Ponderosa"} name4={"Thunderbird"} border={"1px solid black"} onChange={(e)=>{
                setBuilding(building);}} />
            </div> : null}

            {furniture == true ? <div className="listing_box">
              <p>Furniture Category</p>
                <DropdownFurn border={"1px solid black"} onChange={(e)=>{
                setCategory(furniture); 
                }} onCategorySelect={handleCategory}/>
            </div> : null}

            {leavein == true ? <InputPost title="Dorm Room Number" width="300px" placeholder="Enter room number" onChange={(e)=>{
              setDormnum(e.target.value);
            }}/> : null}
            
            <div className="listing_box">
            <p>Upload Image</p>
              <input type="file" onChange={e=>{
                setFile(e.target.files[0]);
              }} />
           </div>

            <div className="listing_box">
              <p>Description</p>
              <textarea placeholder="Write a description..." onChange={(e)=>{
                setDesc(e.target.value);
              }}></textarea>
            </div>

            {error == true ?
          <Alert 
          text="You must fill out all of the fields."/>
          : null}
          
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