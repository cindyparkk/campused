import React, {useState} from 'react';
import ProfilePost from '../../comps/ProfilePost';
import Search from '../../comps/Search';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import CreateListing from '../../comps/CreateListing';
import Footer from '../../comps/Footer';
import ProfileSlider from '../../comps/ProfileSlider';
import Saved from '../../comps/Saved';
import ProductDescription from '../../comps/ProductDescription';
import Profile from '../../comps/Profile';

export default function Home() {
  
  return  <div className='page'>
      {/* <ProfilePost />
      <Search /> */}
      <Header />
      <HeaderMenu />
      <CreateListing />
      <Footer />
      <ProfileSlider />
      <Saved />
      <ProductDescription />
      <Profile />
    </div>
  
}