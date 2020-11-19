import React, {useState, useQuery, useEffect} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Category from '../../comps/Category';
import Post from '../../comps/Post';
import Button from '../../comps/Button';
import FilterOpen from '../../comps/FilterOpen';
import CircleButton from '../../comps/CircleButton';
import Item from '../../comps/Item';

import Router from 'next/router';

import axios from 'axios';
// import { info } from 'node-sass';

function createAListing() {
  console.log("clicked");
    Router.push("/create-a-listing");
}


export default function Leavein() {

  const [post, setPost] = useState([]);

 useEffect(() => {
// if []. run once when the row loads, and don't run again
  async function fetchData() {
    const request = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost");
    //console.log(request);
    setPost(request.data);
    return request;
  }
  fetchData();
 }, []);
//  [post] will update every time there is an update in post

 console.log(post);
  
  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
      <div className="col-4 menu">
            <div>
              <Category />
            </div>
            {process.browser && window.innerWidth > 940 ?<div className="filterdesktop"><FilterOpen /> <div className="addlisting">
            <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
            </div></div>:null}

            {process.browser && window.innerWidth < 940 ? <div className='mobilecontainer'> <div className='mobileadd'>
            <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="40px" width="50px" height="50px" onClick={createAListing} /></div> </div> :null}
          </div>


       <div className="col-3 right">
          <div className="Fullstack">
              <div className="post">
                <div className="post_list">
                <h3>Recent Posts</h3>
                {post.map(info => (
               <div>
                {/* <Post imgurl={info.photoUrl} price={info.price} title={info.title}/> */}
                <Item imgurl={info.photoUrl} price={info.price} title={info.title}/>

                {/* <div>{info.building}</div>
                <h1>{info.title}</h1>
                <img src={info.photoUrl} alt="uploadedimg" height="150" width="150" />
                <div>{info.price}</div>
                <div>{info.dormRoom}</div> */}
                </div>
              ))}</div>
              </div>
              
            </div>
          </div>


      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </div>
}