import React, {useState} from 'react';

import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import SendMoney from '../../comps/SendMoney';
import Footer from '../../comps/Footer';
import Proceed from '../../comps/Proceed';

import Router from 'next/router';

function clicktoPayment() {
  if (true) {
      Router.push("/paypal");
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
     <div className="proceed" onClick={clicktoPayment}>
       <Proceed/>
     </div>
   


    <div className="footer">
        <Footer />
        </div>

  </div>
 
  
}
