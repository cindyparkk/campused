import React, {useState} from 'react';
import Button from '../../comps/Button';
import InputSignup from '../../comps/InputSignup';
import Rating from '../../comps/Rating';
import CircleButton from '../../comps/CircleButton';

import Router from 'next/router';
import axios from 'axios';

function clickBack(){
  if(true){
    Router.push("/");
  }
}

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const HandleSignup = async (e)=>{
    // Router.back();

    // Router.push("/home")
    console.log("clicked", e, name, password, email, confirmPassword);
  

    try{
      setError("");
      await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
        email:email,
        password: password,
        confirmpassword: confirmPassword,
        name:name
      });
      Router.push("/home");

    } catch {
      setError("Failed to create an account")
    }
    

    
  }
  return  <div className="page">
      <img className="home_logo"src="/logo_colour.png"/>
      {process.browser && window.innerWidth < 500 ? <Rating numstars={2} onClick={(num)=>{
        console.log(num);
      }}/> : null}
      <div className="home_back" onClick={clickBack}>
        <CircleButton icon="/arrowleft.svg" width="35px" height="35px" iconwidth="80%"/>
        <h6>Back to Log in</h6>
      </div>
      <h3 className="home_title">Sign up</h3>
      
      <InputSignup title="Full Name" placeholder="ex: John Doe"
      onChange={(e)=>{setName(e.target.value)}}/>
      <InputSignup title="Email Address" placeholder="ex: johndoe@gmail.com" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <InputSignup title="Create a Password" placeholder="Create Password" type="password" onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <InputSignup title="" placeholder="Confirm Password" type="password" margin="-35px" onChange={(e)=>{
        setConfirmPassword(e.target.value)}} />
      {/* <InputSignup title="Name of university/college" placeholder="ex: University of British Columbia"/> */}
      <Button text="Create Account" bgcolor="#73BFB8" onClick={HandleSignup}/>
    </div>
}