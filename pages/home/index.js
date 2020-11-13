import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Category from '../../comps/Category';
import Post from '../../comps/Post';
import Button from '../../comps/Button';

import Router from 'next/router';

function createAListing() {
  console.log("clicked");
    Router.push("/create-a-listing");
}

export default function Home() {
  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
          <div className="page_left">
            <div>
              <Category />
            </div>
            <Button text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
          </div>
          <div className="page_right">
              <Post />
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}