import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
export const userContext = createContext()
const AuthContext = ({children}) => {
    const allAuthContext = useFirebase()
    return (
        <userContext.Provider value={allAuthContext}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;