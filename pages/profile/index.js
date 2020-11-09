import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import Profile from '../../comps/Profile';
import ExpandedMenu from '../../comps/ExpandedMenu';

export default function ProfilePage() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="profile">
        <Profile />
      </div>
      <Button bgcolor="#3DA5D9" color="#FFF" text="Make a listing"/>
      <ProfileSlider />
      <div className="footer">
        <Footer />
      </div>
    </div>
}