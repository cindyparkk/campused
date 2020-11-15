import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';

import axios from 'axios';

import Router from 'next/router';


function clickSignup(){
  if(true){
    Router.push("/signup");
  }
}

function clickLogin(){
  if(true){
    Router.push("/home")
    // add in useEffect / animations
  }
}

export default function Start() {

  const [name, setName] = useState("");
  const HandleLogin = async ()=>{

    console.log("clicked");

    var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api");

    console.log(resp.data);
  }

  return  <div className="page">
    <div className="page_start">
      <img className="home_logo"src="/logo_colour.png"/>
      <InputwIcon placeholder="Email address" title="Log in"/>
      <InputwIcon icon="/lock.png" placeholder="Password" title=""/>
      <p>Don't have an account? Click here to <a href="/signup" onClick={clickSignup}>create an account.</a></p>
      <Button text="Log In" bgcolor="#73BFB8" onClick={HandleLogin} />
    </div>
    </div>
}