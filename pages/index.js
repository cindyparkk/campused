import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';
// import Starry from 'starry-rating';
import axios from 'axios';
import {config} from './auth.js';
import Link from 'next/link';
import Router from 'next/router';

// const starryRating = Starry.stars(3);

function clickSignup(){
  if(true){
    Router.push("/signup");
  }
}

export default function Start() {

  const [name, setName] = useState("");
  const HandleLogin = async ()=>{

    console.log("clicked");

    var resp = await axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api");

    console.log(resp);
  }

  return  <div className="page">
    <div className="page_start">
      <img className="home_logo"src="/logo_colour.png"/>
      <InputwIcon placeholder="Email address" title="Log in"/>
      <InputwIcon icon="/lock.png" placeholder="Password" title=""/>
      <p>Don't have an account? Click here to <Link href=""><a href="/signup" onClick={clickSignup}>create an account.</a></Link></p>
      <Button text="Log In" bgcolor="#73BFB8" onClick={HandleLogin} action={config}/>
    </div>
    {/* <head>
      <link href="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.css" type="text/css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.js" type="text/javascript" language="javascript"></script>
      <div id="star-rating"></div>
    </head> */}
    </div>
}