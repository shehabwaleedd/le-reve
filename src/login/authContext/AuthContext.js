import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from 'firebase/auth';

import { auth } from "../../firebase-config";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (userName, email, password, confirmPassword, age, country, phoneNumber) => {
        return createUserWithEmailAndPassword(auth, userName, email, password, confirmPassword, age, country, phoneNumber);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ createUser, user, logOut, signIn, passwordReset }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserAuth = () => { // Rename UserAuth to useAuth
    return useContext(UserContext);
};