import React, {useState} from 'react';
import Header from '../../comps/Header';
import HeaderMenu from '../../comps/HeaderMenu';
import Footer from '../../comps/Footer';
import Payment from '../../comps/Payment';
import Link from 'next/link';
import Router from 'next/router';

export default function SuccessPage() {
    return  <div className="page">
        <Header />
        <HeaderMenu />
        <div className="success">
            <Payment title="Your listing has been posted." link="Click this link to see your post."/>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
  }