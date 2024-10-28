import {useContext, useEffect} from "react";
import {authContext} from "../auth.jsx";
import {Link, useNavigate} from "react-router-dom";


export default function ProtectedRoute({children}){
    const {isAuthenticated} = useContext(authContext);
    const navigate = useNavigate();
    console.log("hello "+ isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/signin');
        }
    }, [isAuthenticated, navigate]);

    // Only render children if the user is authenticated
    return isAuthenticated ? children : null;

}