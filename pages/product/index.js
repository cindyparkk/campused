import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import ProfilePost from '../../comps/ProfilePost';
import Divider from '../../comps/Divider';
import ProdictDescription from '../../comps/ProductDescription';
import ProductDetails from '../../comps/ProductDetails';
import PostSlide from '../../comps/PostSlide';

export default function Product() {
  return  <div className="page">
      <Header />
      <HeaderMenu />
      <div>
          <div>
              {/* product image */}
          </div>
      
      </div>

     <PostSlide />
      
      <ProductDetails />

      <div className="product_description">
        <Divider />
        <ProdictDescription />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
}