import React, {useState} from 'react';
import Button from '../comps/Button';
import InputwIcon from '../comps/InputwIcon';
import Menu from '../comps/Menu';

export default function Home() {
  
  return  <div>
    {/* <img src="/logo_colour.png"/> */}
    <InputwIcon imgurl="/logo_colour.png"/>
    <Button text="Log In" bgcolor="#73BFB8"/>
    <Menu />
    </div>
  
}
