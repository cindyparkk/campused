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
    <BigCategory title="Choose a Building" name1="Brock Hall" name2="Walter Gage " name1="Ponderosa" name1="Thunderbird" />
    </div>
 
    <div className="itempost">
    <Post title="All Leave-in Furniture"/>
    </div>
    
    <div className="icons">
    <FilterOpen />
    </div>

     <div className="footer">
          <Footer />
          </div>
  
    </div>
   
    
  }
  