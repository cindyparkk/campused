import React, {useState} from 'react';
import Header from '../../comps/Header';
import ChatHeader from '../../comps/ChatHeader';
import Router from 'next/router';

import Chatroom from '../Chatroom';


export default function Chat() {
  return  <div className="page">
      <Header />
      <ChatHeader />
        <div className="chat_page">
        <Chatroom />
        </div>
       
 
    </div>
}