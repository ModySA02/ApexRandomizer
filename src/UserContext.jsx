import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        axios.get('/profile').then(response => {
            setUser(response.data);
            setReady(true);
        });
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    )
}
