import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';





export default function MainPage() {
    return  <div className="page">
        <Header />
        <HeaderMenu />

        <div className="footer">
          <Footer />
        </div>
      </div>
  }