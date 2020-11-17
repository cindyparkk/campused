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

  const [handle, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
<<<<<<< HEAD
  const [error, setError] = useState("");
  const HandleSignup = async (e)=>{
    // Router.back();

    // Router.push("/home")
    console.log("clicked", e,confirmPassword, password, email, handle);
  

    try{
      setError("");
      await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
        email:email,
        password: password,
        confirmpassword: confirmPassword,
        handle:handle
      });

    } catch {
      setError("Failed to create an account")
    }
    

    
=======
  // const [handle, setHandle] = useState("");

  const HandleSignup = async (e)=>{

    console.log("clicked", e, name, password, email, confirmPassword);

    /*
      if confirm !== pass 
        setError("password sucks")
        return false
    */
   try{
     console.log("");
      await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
      email:email,
      password:password,
      confirmPassword: confirmPassword,
      name: name
    });
    Router.push("/home");
   } catch {
     console.log("Failed");
    //  show error if password is less than 6 characters
   }

    // console.log(resp.data, resp.data.token);
    // if(resp.data.token){
    //   //store the token in sessionStorage
    //   //route to the next page
    // }
>>>>>>> a2b921a23de5d27abaa48dbba060518ccb9ca437
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
<<<<<<< HEAD
      
      
=======
      <InputSignup title="Full Name" placeholder="ex: John Doe" onChange={(e)=>{
        setName(e.target.value);
      }}/>
>>>>>>> a2b921a23de5d27abaa48dbba060518ccb9ca437
      <InputSignup title="Email Address" placeholder="ex: johndoe@gmail.com" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      <InputSignup title="Create a Password" placeholder="Create Password" type="password" onChange={(e)=>{
        setPassword(e.target.value);
      }}/>
      <InputSignup title="" placeholder="Confirm Password" type="password" margin="-35px" onChange={(e)=>{
<<<<<<< HEAD
        setConfirmPassword(e.target.value)}} />
      <InputSignup title="FullName" placeholder="ex: Doe"
      onChange={(e)=>{setName(e.target.value)}}/>
=======
        setConfirmPassword(e.target.value);
        }}/>
>>>>>>> a2b921a23de5d27abaa48dbba060518ccb9ca437
      {/* <InputSignup title="Name of university/college" placeholder="ex: University of British Columbia"/> */}
      <Button text="Create Account" bgcolor="#73BFB8" onClick={HandleSignup}/>
    </div>
}