import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import ProfilePost from '../../comps/ProfilePost';

export default function Profile() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div>
          <h1>Your Name</h1>
      </div>
      <Button bgcolor="#3DA5D9" color="#FFF" text="Make a listing"/>
      <ProfileSlider />
      <div className="profile_contents">
          <div>
            <ProfilePost />
          </div>
          <div>
            <ProfilePost />
          </div>
          <div>
            <ProfilePost />
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}