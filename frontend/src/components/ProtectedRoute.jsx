import {useContext} from "react";
import {authContext} from "../auth.jsx";
import {Link, useNavigate} from "react-router-dom";


export default function ProtectedRoute({children}){
    const {isAuthenticated} = useContext(authContext);
    const navigate = useNavigate();
    console.log("hello "+ isAuthenticated);

    if(isAuthenticated){
        return children;
    }else{
        navigate("/signin");
    }

}