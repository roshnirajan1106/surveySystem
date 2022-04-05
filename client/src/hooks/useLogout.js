import React from 'react'
import { useState } from 'react'
import {projectAuth} from '../firebase/config'
import {useAuthContext} from './useAuthContext'
import { useEffect } from 'react'
export const useLogout = () => {
    const[isCancelled,setIsCancelled] = useState(false);
    const[error,setError] = useState(false);
    const[isPending,setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
    const logout = async () =>{
        setError(null);
        setIsPending(true);
        try{
            await projectAuth.signOut();
            dispatch ({type:'LOGOUT'});
            if(!isCancelled){
                setIsPending(false);
            setError(null);
            }
            
        }
        catch(err)
        {
            if(!isCancelled){
            setError(err.message);
            setIsPending(false); }
        }

        
    }
    useEffect (() =>{
        return () => setIsCancelled(true);
    },[])
    return {logout,error,isPending};
}