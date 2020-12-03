import React, {useState, useEffect} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Button from '../../comps/Button';
import ProfileSlider from '../../comps/ProfileSlider';
import ProfilePost from '../../comps/ProfilePost';
import Divider from '../../comps/Divider';
import ProductDescription from '../../comps/ProductDescription';
import ProductDetails from '../../comps/ProductDetails';
import PostSlide from '../../comps/PostSlide';

import {useRouter} from 'next/router';
import Axios from 'axios';

export default function Product() {
  const _routes = useRouter();
  const [product, setProduct] = useState({});

  const {postId} = _routes.query;
  console.log("postId", postId);
  useEffect(async () => {
    const postInfo = await Axios.get(`https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost/${postId}`);
    setProduct(postInfo)
    console.log(postInfo);
  }, [postId])
  return  <div>
      <Header />
      <HeaderMenu />
      <div>
          <div>
              {/* product image */}
          </div>
      
      </div>

     <PostSlide price={"$00"} />
      
      <ProductDetails />

      <div className="product_description">
        <Divider />
        {/* {product.map((buy) =>)} */}
        <ProductDescription title={product.title} description={product.description}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
}