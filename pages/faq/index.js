import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';

export default function FAQ() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div className="faq_contents">
          <div className="textbox">
            <h2>FAQ Page</h2>
            <div>
                <h6>Q: What does ‘Leave-in’s’ mean?</h6>
                <p>‘Leave-in’s’ are a category of furniture that is specifically furniture that you leave behind in your dorm. 
                    This way, there’s no process of moving out all of your furniture. The furniture simply moves from one 
                    owner to another without having to pick up a single thing!</p>
            </div>
            <div>
                <h6>Q: How can I pay the seller? Do I just pay them in person?</h6>
                <p>Campused offers an easy and secure payment system directly through our app using PayPal! Simply click ‘Buy Now’ 
                    on the item you wish to purchase which will direct you to messaging with the buyer. When you’ve settled on an 
                    agreement with the buyer, click ‘Pay Now’ at the top of the messaging which directs you to our payment system.</p>
            </div>
            <div>
                <h6>Q: What is the Wishlist?</h6>
                <p>The wishlist is used to save posts you may come across that you possible are interested in buying at some point 
                    in the future. Simply click the heart icon on an item you’re viewing to add that product to your wishlist so you 
                    can come back to it later. You can view your wishlist in the hamburger menu or from your profile by clicking 
                    ‘Wishlist’ next to ‘My Listings.’</p>
            </div>
            <div>
                <h6>Q: Are the posts I see selling furniture located at schools all over BC?</h6>
                <p>No. All listings for furniture are filtered according to your school only. Your school is selected when creating 
                    an account.</p>
            </div>
          </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}