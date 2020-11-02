import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';
import Starry from 'starry-rating';

// const starryRating = Starry.stars(3);

export default function Home() {
  return  <div>
    {/* <img src="/logo_colour.png"/> */}
    <InputwIcon imgurl="/logo_colour.png"/>
    <Button text="Log In" bgcolor="#73BFB8"/>
    <head>
      <link href="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.css" type="text/css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/gh/teddy95/starry@5/dist/starry.min.js" type="text/javascript" language="javascript"></script>
      <div id="star-rating"></div>
    </head>
    </div>
}