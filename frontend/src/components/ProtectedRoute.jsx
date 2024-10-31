import {useContext, useEffect} from "react";
import { useAuth} from "../auth.jsx";
import {Link, Navigate, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {useUser} from "../UserContext.jsx";


export default function ProtectedRoute({children}){
    const {isAuthenticated, setIsAuthenticated} = useAuth();
    const {user, setUser} = useUser();
    const navigate = useNavigate();
    console.log("hello "+ isAuthenticated);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await axios.get("http://localhost:8080/users/auth/check", { withCredentials: true });
                    console.log(response.data);
                    setIsAuthenticated(response.data.authenticated);
                    if (response.data.authenticated) {
                        setUser(response.data.user); // Store user data
                    }
                    resolve(response.data.authenticated);
                } catch (e) {
                    console.error(e);
                    setIsAuthenticated(false);
                    reject(false);
                }
            });
        };

        checkAuth().then((response)=>{
            console.log(response);
            if (!response) {
                navigate('/signin');
            }
        }).catch(()=>{
            navigate('/signin');
        });
    }, []);


    // Only render children if the user is authenticated
    return isAuthenticated ? children : null;

}