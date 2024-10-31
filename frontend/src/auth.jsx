import {createContext, useContext, useState} from "react";

const authContext = createContext({});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    return (
        <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </authContext.Provider>
    );
}

export function useAuth() {
    return useContext(authContext);
}

