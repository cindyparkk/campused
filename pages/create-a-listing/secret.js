import firebase from 'firebase';
import React from 'react';


const config = {
    apiKey: "AIzaSyBYJ8ByelFfWri-SvhctptYM16xVMjDHHY",
    authDomain: "campused-15cf0.firebaseapp.com",
    databaseURL: "https://campused-15cf0.firebaseio.com",
    projectId: "campused-15cf0",
    storageBucket: "campused-15cf0.appspot.com",
    messagingSenderId: "623791617627",
    appId: "1:623791617627:web:dee48f8bb774797d7ff17e",
    measurementId: "G-T0FRF0EZ3V"
 };
 

try {
    firebase.initializeApp(config)
    } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
    }
    }

export default firebase;
