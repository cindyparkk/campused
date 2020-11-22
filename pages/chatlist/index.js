import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import ChatMsg from '../../comps/ChatMsg';

import Router from 'next/router';

function clickChat(){
  if(true){
    Router.push("/chat");
  }
}

export default function Chatlist() {
  return  <div className="page">
      <Header />
        <HeaderMenu />
      <h1
      style={{color:"#EA7317", textAlign:"left", alignSelf: 'flex-start', marginLeft:"40px", marginBottom:"10px"}}>Messages</h1>
        <div className="chatlist_page" onClick={clickChat}>
            <ChatMsg />
        </div>
       
 
    </div>
}