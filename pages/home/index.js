import React, {useState, useQuery, useEffect} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Category from '../../comps/Category';
import Post from '../../comps/Post';
import Button from '../../comps/Button';
import FilterOpen from '../../comps/FilterOpen';
import CircleButton from '../../comps/CircleButton';

import Router from 'next/router';

import axios from 'axios';

function createAListing() {
  console.log("clicked");
    Router.push("/create-a-listing");
}


export default function Home() {

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

 console.log(post);
  
  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
          <div className="page_left">
            <div>
            
              <Category />
            </div>
           

            {process.browser && window.innerWidth > 940 ? <div className="addlisting">
            <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
            </div>:null}

            {process.browser && window.innerWidth < 940 ? <div className='mobilecontainer'> <div className='mobileadd'>
            <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="40px" width="50px" height="50px" onClick={createAListing} /></div> </div> :null}
          </div>
          <div className="page_right">




          
          <div className="Fullstack">
              <h1>test for api</h1>
              <div>{post.map(info => (
               <div> <div>{info.building}</div>
                <h1>{info.title}</h1>
                <img src={info.photoUrl} alt="uploadedimg" height="150" width="150" />
                
                <div>{info.price}</div>
                <div>{info.dormRoom}</div>
                </div>
              ))}</div>
              
            </div>



              <Post />
          </div>


      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </div>
}