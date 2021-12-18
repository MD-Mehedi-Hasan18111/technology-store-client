import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
    const allContextValue = useFirebase();

    return (
        <AuthContext.Provider value={allContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;