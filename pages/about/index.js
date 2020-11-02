import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';

export default function About() {
  return  <div className="page_about">
      <Header />
      <HeaderMenu />
      <div className="about_contents">
          <div className="textbox">
              <h2>About Us</h2>
              <img src="/whispurr.png" align="right"/>
              <p>We are Whispurr! A team of 5 students who created Campused to help out students when it comes to moving into our out of their campus dorm at UBC. 
                  <br/>Students already have a lot on their plate, so why not take some of the stress out of their lives by smoothing the process of finding a dorm and furniture when starting your courses at school! Campused allows for cheap deals for furniture and quickly allows you to get settled into a dorm so you can make focusing on your studies your top priority. And best of all, everything is $100 or less!
              </p>
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}