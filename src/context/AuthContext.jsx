import { useState, useContext, createContext, useEffect, Children} from "react";
import AuthService from "../services/AuthService";

const AuthContext = createContext(null);
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(getUser);
    
    

    const getUser = () =>{
        const temp = localStorage.getItem("user");
        const savedUser = JSON.parse(temp);
        return savedUser || null;
    }
}