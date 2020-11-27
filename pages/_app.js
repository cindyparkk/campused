import './app.scss';
import jwtDecode from 'jwt-decode';
import Axios from 'axios';


if (process.browser){
  const token = localStorage.FBIdToken

  if(token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    Axios.defaults.headers["Authorization"] = `${token}`;
  }
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
