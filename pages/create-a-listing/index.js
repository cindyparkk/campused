import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import CreateListing from '../../comps/CreateListing';

export default function CreateAListing() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="page_contents">
        <CreateListing />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}