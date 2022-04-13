import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("use Auth Context must be inside auth context");
        
    }
    return context
}