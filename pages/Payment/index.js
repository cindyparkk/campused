import React, {useState} from 'react';

import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import SendMoney from '../../comps/SendMoney';
import Footer from '../../comps/Footer';
import Proceed from '../../comps/Proceed';

import Router from 'next/router';

function clickProceed(){
  if(true){
      Router.push("/payment2");
  }
}

export default function Payment() {
  
  return   <div className="page">
   <Header />
   <HeaderMenu/>
   <div className="payment_contents">
     <h2>Payment Details</h2>
     <SendMoney />
     </div>   
     <div className="proceed">
       <Proceed />
     </div>
   


    <div className="footer">
        <Footer />
        </div>

  </div>
 
  
}
