import React, {useState} from 'react';


import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Paypal from '../../comps/Paypal';
import Footer from '../../comps/Footer';






export default function Payment() {
  
    return   <div className="page">
     <Header />
     <HeaderMenu/>
     <Paypal/>
  
      <div className="footer">
          <Footer />
      </div>
  
    </div>
   
    
  }
  