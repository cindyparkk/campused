import React, {useState} from 'react';

import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import BigCategory from '../../comps/Category';
import Post from '../../comps/Post';
import FilterOpen from '../../comps/FilterOpen';








export default function Furniture() {
  
    return   <div className="page">
     <Header />
     <HeaderMenu/>
    <br></br>
    <div className="category">
    <BigCategory />
    </div>
 
    <div className="itempost">
    <Post />
    </div>
    
    <div className="icons">
    <FilterOpen />
    </div>

     <div className="footer">
          <Footer />
          </div>
  
    </div>
   
    
  }
  