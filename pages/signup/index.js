import React, {useState} from 'react';
import Button from '../../comps/Button';
import InputSignup from '../../comps/InputSignup';
// import Rating from '../../comps/Rating';
import CircleButton from '../../comps/CircleButton';
import Alert from '../../comps/Alert';

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
  const [failed, setFailed] = useState("");
  const pwdLength = password.length;
  const [error, setError] = useState(false);
  
  const HandleSignup = async (e)=>{

    console.log("clicked", e, name, password, email, confirmPassword);
  
    // try{
    //   setFailed("");
    //   await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
    //     email:email,
    //     password: password,
    //     confirmpassword: confirmPassword,
    //     name:name
    //   });
    //   Router.push("/home");

    // } catch {
    //   setFailed("Failed to create an account");
    // }

    if (pwdLength <= 5 || confirmPassword != password){
      setError(true)
      setFailed("Failed to create an account");
    } else{
      setError(false);
      setFailed("");
      await axios.post("https://us-central1-campused-15cf0.cloudfunctions.net/api/signup", {
        email:email,
        password: password,
        confirmpassword: confirmPassword,
        name:name
      });
      Router.push("/");
    }
  }

  // const signupErrors  = () => {
  //   if (pwdLength <= 6){
  //     setError(true);
  //   } else {
  //     setError(false);
  //   }
  // }
  return  <div className="page">
      <img className="home_logo"src="/logo_colour.png"/>
      {/* {process.browser && window.innerWidth < 500 ? <Rating numstars={2} onClick={(num)=>{
        console.log(num);
      }}/> : null} */}
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
      
      {error == true && pwdLength <= 6 ? 
      <Alert />
      : null}

      {error == true && confirmPassword != password ? 
      <Alert 
      text="Your password must match the one you entered above."/>
      : null}
      <Button text="Create Account" bgcolor="#73BFB8" onClick={HandleSignup}/>
    </div>
}