import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import SavedItemlist from '../../comps/SavedItemlist';





export default function MainPage() {
    return  <div className="page">
        <Header />
        <HeaderMenu savedtextcolor={"#EA7317"} />

        <SavedItemlist />
        <div className="footer">
          <Footer />
        </div>
      </div>
  }