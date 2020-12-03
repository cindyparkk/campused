import './app.scss';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';
import { useRouter as Router } from 'next/router';
import {AuthProvider} from "../auth";

if (process.browser){
  const token = localStorage.FBIdToken

  if(token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    Axios.defaults.headers["Authorization"] = `${token}`;
  } 
}

function MyApp({ Component, pageProps }) {
  return <AuthProvider><Component {...pageProps} /></AuthProvider>
  
}

export default MyApp
