import React, {useState, useEffect} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Item from '../../comps/Item';
import Button from '../../comps/Button';
import FilterOpen from '../../comps/FilterOpen';
import CircleButton from '../../comps/CircleButton';
import DropdownFurn from '../../comps/DropdownFurn';

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
    if(request.data.furniture === true){
      setPost(request.data);
      return request;
    } else {
      return "";
    }
  }
  fetchData();
 }, []);
//  [post] will update every time there is an update in post

  return  <div className="page">
      <Header />
      <HeaderMenu furnituretextcolor={"#EA7317"}/>
      <div className="page_home">
          <div className="col-4 menu">
            <div>
            <DropdownFurn fontweight={800} font={"'Montserrat', sans-serif"} name1={"Bedroom"} name2={"Bathroom"} name3={"Kitchen"} name4={"Living Room & General Furniture"}/>
              {/* <Category /> */}
              {/* <Button onClick={HandlePost} /> */}
            </div>

            {process.browser && window.innerWidth > 940 ?<div className="filterdesktop"><FilterOpen /> <div className="addlisting">
            <Button center="center" text="+ Add a Listing" color="#FFF" bgcolor="#3DA5D9" fsize="26px" onClick={createAListing}/>
            </div></div>:null}

            {process.browser && window.innerWidth < 940 ? <div className='mobilecontainer'> <div className='mobileadd'>
            <FilterOpen /><CircleButton icon="/addblack.svg" iconwidth="50px" width="50px" height="50px" onClick={createAListing} /></div> </div> :null}


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