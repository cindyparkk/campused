import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import Profile from '../../comps/Profile';
import Rating from '../../comps/Rating';
import ExpandedMenu from '../../comps/ExpandedMenu';

import Router from 'next/router';
import axios from 'axios';

function createListing(){
  if(true){
    Router.push("/create-a-listing");
  }
}

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleProfile = async () =>{
      console.log("clicked", title, price, leavein, furniture, building, category, dormnum, desc);

      var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user");

      console.log(resp.data);

      setName(resp.data.name);
      setImage(resp.data.imageUrl);
  }

  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="profile">
        <Profile name={name}
        icon={image}
        />
        <div className="rating">
          <Rating />
        </div>
        <Button onClick={createListing} bgcolor="#3DA5D9" color="#FFF" text="Make a listing" fsize="24px"/>
      </div>
      <ProfileSlider />
      <div className="footer">
        <Footer />
      </div>
    </div>
}