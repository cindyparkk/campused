import React, {useState} from 'react';
import Button from '../../comps/Button';
import InputSignup from '../../comps/InputSignup';
import Rating from '../../comps/Rating';
import Router from 'next/router'

import axios from 'axios';

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const HandleSignup = async (e)=>{
    // Router.back();

    // Router.push("/home")
    console.log("clicked", e, password, email);
    // return false;
    /*
      if confirm !== pass 
        setError("password sucks")
        return false
    */

    var resp = await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
      email:email,
      password:password
    });

    console.log(resp.data, resp.data.token);
    if(resp.data.token){
      //store the token in sessionStorage
      //route to the next page
    }
  }
  return  <div className="page">
      <img className="home_logo"src="/logo_colour.png"/>
      {process.browser && window.innerWidth < 500 ? <Rating numstars={2} onClick={(num)=>{
        console.log(num);
      }}/> : null}
      <InputSignup title="First Name"/>
      <InputSignup title="Last Name" placeholder="ex: Doe"/>
      <InputSignup title="Email Address" placeholder="ex: johndoe@gmail.com" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <InputSignup title="Create a Password" placeholder="Create Password" type="password" onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <InputSignup title="" placeholder="Confirm Password" type="password" margin="-35px"/>
      <InputSignup title="Name of university/college" placeholder="ex: University of British Columbia"/>
      <Button text="Create Account" bgcolor="#73BFB8" onClick={HandleSignup}/>
    </div>
}