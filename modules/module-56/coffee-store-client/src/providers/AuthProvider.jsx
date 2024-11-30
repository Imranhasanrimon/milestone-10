import { createContext, useState } from "react";
import { auth } from './../firebase/firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const userInfo = {
        user,
        setUser,
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;