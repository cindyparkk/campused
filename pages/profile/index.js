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
      </div>
      <Button bgcolor="#3DA5D9" color="#FFF" text="Make a listing"/>
      <ProfileSlider />
      <div className="footer">
        <Footer />
      </div>
    </div>
}