import { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication on component mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users/auth/check', { withCredentials: true });
                console.log(response.data);
                setIsAuthenticated(response.data.authenticated);
            } catch (err) {
                setIsAuthenticated(false); // Set to false if the request fails
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
