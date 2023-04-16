import { createContext, useState, useEffect, useReducer } from "react";
import { setCurrentUser } from "../store/user/user.action";
import { userReducer } from "../store/user/user.reducer";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

const INITIAL_STATE = {
    currentUser: null
}

export const UserProvider = ({ children }) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)

    const value = { currentUser, setCurrentUser }

    return (

        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )

};

