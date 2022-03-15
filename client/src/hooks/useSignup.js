import React from 'react'
import {projectAuth} from '../firebase/config'
import { useState } from 'react'
export const useSignup = () => {
  const[error,setError] = useState(null);
  const[loading,setLoading] = useState(null);
  const signup = async (email,password,displayName) =>{
        setError(null);
        setLoading(null);
        try{
            //
            const res= await projectAuth.createUserWithEmailAndPassword(email,password)
            if(!res){
                throw new Error('Could not complete signup');
            }
            console.log(res.user);
            //add display name to user
            await res.user.updateProfile({displayName})
            setLoading(false);
            setError(null);

        }catch(err){
            setError(err.message);
            console.log(err.message);
            setLoading(false);
        }
  }

  return {error,loading,signup}
}


