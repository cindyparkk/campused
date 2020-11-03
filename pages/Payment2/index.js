import React, {useState} from 'react';

import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';


import Payment from '../../comps/Payment';



export default function Payment2() {
  
    return   <div className="page">
     <Header />
     <HeaderMenu/>
      <Payment />
  
      <div className="footer">
          <Footer />
          </div>
  
    </div>
   
    
  }
  