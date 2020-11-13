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
import FilterOpen from '../../comps/FilterOpen';

import Item from '../../comps/Item';
import Post from '../../comps/Post';

import Rating from '../../comps/Rating';

export default function Home() {
  
  return  <div>
      {/* <ProfilePost />
      <Search /> */}
      <Header />
      <HeaderMenu />
      {/* <CreateListing />
      <Footer />
      <ProfileSlider />
      <Saved />
      <ProductDescription />
      <Profile /> */}
      {/* <FilterOpen /> */}

      <div>
        <Item />
        <Post />
      </div>
      <Rating></Rating>
    </div>
  
}