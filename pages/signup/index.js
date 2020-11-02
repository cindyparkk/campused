import React, {useState} from 'react';
import Button from '../../comps/Button';
import InputSignup from '../../comps/InputSignup';

export default function Signup() {
  return  <div className="page">
      <img className="home_logo"src="/logo_colour.png"/>
      <InputSignup title="First Name"/>
      <InputSignup title="Last Name" placeholder="ex: Doe"/>
      <InputSignup title="Email Address" placeholder="ex: johndoe@gmail.com"/>
      <InputSignup title="Create a Password" placeholder="Create Password" type="password"/>
      <InputSignup title="" placeholder="Confirm Password" type="password" margin="-35px"/>
      <InputSignup title="Name of university/college" placeholder="ex: University of British Columbia"/>
      <Button text="Create Account" bgcolor="#73BFB8"/>
    </div>
}