import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';
// import Starry from 'starry-rating';

// const starryRating = Starry.stars(3);

export default function Home() {
  return  <div className="page">
    <img className="home_logo"src="/logo_colour.png"/>
    <InputwIcon placeholder="Email address" title="Log in"/>
    <InputwIcon icon="/lock.png" placeholder="Password" title=""/>
    <p>Don't have an account? Click here to <a href="">create an account.</a></p>
    <Button text="Log In" bgcolor="#73BFB8"/>
    <head>
      <link href="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.css" type="text/css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.js" type="text/javascript" language="javascript"></script>
      <div id="star-rating"></div>
    </head>
    </div>
}