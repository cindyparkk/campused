import React, {useState} from 'react';
import Header from '../../comps/Header';
import ChatHeader from '../../comps/ChatHeader';


import Chatroom from '../Chatroom';


export default function Product() {
  return  <div className="page">
      <Header />
      <ChatHeader />
      <h1
      style={{color:"#EA7317", textAlign:"left", alignSelf: 'flex-start', marginLeft:"40px", marginBottom:"-10px"}}>Messages</h1>
        <div className="chat_page">
        <Chatroom />
        </div>
       
 
    </div>
}