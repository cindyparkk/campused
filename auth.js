import React, {createContext, useState, useContext, useEffect} from "react";
import Router, {useRouter} from "next/router";
import jwtDecode from 'jwt-decode';
import Axios from 'axios';
const AuthContext = createContext({});

const allowedRoutes = ["/", "/signup"];
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const _routes = useRouter();
    console.log(_routes);
    if (process.browser){
        const token = localStorage.FBIdToken
      
        // if(token) {
        //   const decodedToken = jwtDecode(token);
        //   console.log(decodedToken);
        //   Axios.defaults.headers["Authorization"] = `${token}`;
        // } 
      }

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = localStorage.FBIdToken
            if(!token && allowedRoutes.indexOf(_routes.pathname) === -1){
                _routes.push("/");
            }
            if (token) {
                const decodedToken = jwtDecode(token);
                console.log(decodedToken);
                Axios.defaults.headers["Authorization"] = `${token}`;
                
                const resp = await Axios.get("https://us-central1-campused-15cf0.cloudfunctions.net/api/user/")
                console.log(resp)
                if (resp.data) setUser(resp.data);

                setLoading(false)
            } else {
                setLoading(false)
            }
        }
        loadUserFromCookies()
    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user,loading, setUser }}> 
            {!loading?children:null}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = ({children}) => {
    const {isAuthenticated, isLoading} = useAuth();
    if (isLoading || (!isAuthenticated && window.location.pathname !== "/")) {

    }
}