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

function createListing(){
  if(true){
    Router.push("/create-a-listing");
  }
}

export default function ProfilePage() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="profile">
        <Profile />
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