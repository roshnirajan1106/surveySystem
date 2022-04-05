import React from 'react'
import { useState } from 'react'
import {useAuthContext} from './useAuthContext'
import {projectAuth} from  '../firebase/config'
import { useEffect } from 'react'
const useSignup = () => {
    const[isCancelled,setIsCancelled] = useState(false);
    const[error,setError] = useState(null);
    const[isPending,setIsPending] = useState(false);
    const {dispatch} = useAuthContext();
        const signup = async (email,password,displayName)=>{
        setError(null);
        setIsPending(true);
         try{
            const res = await projectAuth.createUserWithEmailAndPassword(email,password);
            if(!res){
                throw new Error("could not complete signup");

            }
            //add display name
            await res.user.updateProfile({displayName});            
            if(!isCancelled){setIsPending(false);
            setError(null);}
            dispatch({type:'LOGIN',payload:res.user})
        
        }
         catch(err){
            if(!isCancelled){
             console.log(err.message);
             setError(err.message);
             setIsPending(false);}
         }
    }
    useEffect (() =>{
        return () => setIsCancelled(true);
    },[])
    return {error,isPending,signup};
}

export default useSignup