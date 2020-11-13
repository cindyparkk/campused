import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Browse_Button from '../../comps/Browse_Button';





export default function MainPage() {
    return  <div className="page">
        <Header />
        <HeaderMenu />
       <h2 text-align="left">Welcome to campused!</h2>

       <p>Get your furniture without having to move a single piece! Student furniture can be left in the campus dorm for the next person to use.</p>
       <Browse_Button text="Check it out"/>
       
       <p>Tired of searching through several websites for the cheapest deals? Find the furniture you’re looking for all under $100!</p>       
       <Browse_Button text="Go to Furniture Market"  bgcolor="#73BFB8"/>

        <div className="footer">
          <Footer />
        </div>
      </div>
  }