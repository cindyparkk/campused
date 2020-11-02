import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Menu from '../../comps/Menu';
import Post from '../../comps/Post';
import Button from '../../comps/Button';

export default function Home() {
  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
          <div className="page_left">
              <Button text="Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px"/>
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