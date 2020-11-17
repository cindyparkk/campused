import React, {useState, useQuery} from 'react';
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

<<<<<<< HEAD
  
=======
  const [post, setPost] = useState("");

  const HandlePost = async ()=>{

    console.log("clicked");

      console.log("");
      var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/getPost");

      // console.log("Failed");

     console.log(resp.data);
    // Router.push("/home");
  }

>>>>>>> a2b921a23de5d27abaa48dbba060518ccb9ca437
  return  <div className="page">
       <Header />
      <HeaderMenu />
      <div className="page_home">
          <div className="page_left">
            <div>
<<<<<<< HEAD
            
              <Category />
=======
            <Category title="Choose a Building" name1="Brock Hall" name2="Walter Gage " name1="Ponderosa" name1="Thunderbird" />
              {/* <Button onClick={HandlePost} /> */}
>>>>>>> a2b921a23de5d27abaa48dbba060518ccb9ca437
            </div>
            

            {process.browser && window.innerWidth > 940 ? <div className="addlisting">
            <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
            </div>:null}

            {process.browser && window.innerWidth < 940 ? <div className='mobilecontainer'> <div className='mobileadd'>
            <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="40px" width="50px" height="50px" onClick={createAListing} /></div> </div> :null}
          </div>
          <div className="page_right">
              <Post />
          </div>
      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </div>
}