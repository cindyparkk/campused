import React, {useState} from 'react';
import Header from '../../comps/Header';
import ChatHeader from '../../comps/ChatHeader';


import Chatroom from '../Chatroom';


export default function Product() {
  return  <div className="page">
      <Header />
      <ChatHeader />
        <div className="chat_page">
        <Chatroom />
        </div>
       
 
    </div>
}