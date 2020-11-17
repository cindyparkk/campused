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

// function clickLogin(){
//   if(true){
//     Router.push("/home");
//     // add in useEffect / animations
//   }
// }

export default function Start() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async (e)=>{

    console.log("clicked", e, email, password);

    try{
      console.log("");
       var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/login", {
       email:email,
       password:password
     });
     console.log(resp.data);
     Router.push("/home");
    } catch {
      console.log("Failed");
    }

  }

  return  <div className="page">
    <div className="page_start">
      <img className="home_logo"src="/logo_colour.png"/>
      <InputwIcon placeholder="Email address" title="Log in" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <InputwIcon icon="/lock.png" placeholder="Password" type="password" title="" onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <p>Don't have an account? Click here to <a href="/signup" onClick={clickSignup}>create an account.</a></p>
      <Button text="Log In" bgcolor="#73BFB8" onClick={HandleLogin} />
    </div>
    </div>
}