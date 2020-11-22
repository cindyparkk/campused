import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Browse_Button from '../../comps/Browse_Button';
import Button from '../../comps/Button';
import Router from 'next/router';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';

// if (typeof window === "undefined"){
//   const token = localStorage.FBIdToken

// if(token) {
//   const decodedToken = jwtDecode(token);
//   console.log(decodedToken);
// }
// }
if (process.browser){
  const token = localStorage.FBIdToken

if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
}
}


function clicktoleavein() {
  if (true) {
      Router.push("/home");
  }
}

function clicktofurniture() {
  if (true) {
      Router.push("/furnitre_market");
  }
}
function getUserData() {
 Axios.get('https://us-central1-campused-15cf0.cloudfunctions.net/api/user')
 .then(res => {
   console.log(res.data)
 })
 .catch(err => console.log(err))
}

export default function Home() {

  
    return  <div className="page">
        <Header />
        <HeaderMenu />
        <div className="home_header">
        <h2>Welcome to campused!</h2>
        </div>
      

         <div className="main_part1">
           <button onClick={getUserData}>
             click me
           </button>
          <img src="/userpost4.png"></img>
          <div>
          <p>Get your furniture without having to move a single piece! <br/>Student furniture can be left in the campus dorm for the next person to use.</p>
         <Button text="Check it out" onClick={clicktoleavein}/>
          </div>
        </div>
 
        <div className="main_part2">
        <div>
        <p>Tired of searching through several websites for the cheapest deals? <br/>Find the furniture you’re looking for all under $100!</p>       
       <Browse_Button text="Go to Furniture Market"  bgcolor="#73BFB8" onClick={clicktofurniture}/>
        </div>
       <img src="/userpost3.png"></img>
       </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
  }