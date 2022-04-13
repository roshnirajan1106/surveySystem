
import { createContext, useEffect, useState } from 'react'
import { useReducer } from 'react'
import { projectAuth } from '../firebase/config';
export const AuthContext = createContext();

export const authReducer = (state,action) =>{
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return {...state,user:null}
        case 'AUTH_IS_READY':
            return {...state,user :action.payload,authIsReady:true}
        default:
            return state
    }
}  

export const set_the_info = (state,action) =>{
    switch(action.type){
        case 'addinfo':
            return {...action.payload,isPending:true};
        case 'destoryinfo':
            return {isPending:false,gender:null,intrests:null,occupation:null};
        default :
            return state;
    }
}

export const AuthContextProvider = ({children}) => {
    const[state,dispatch] = useReducer(authReducer,{
        user:null,
        authIsReady : false
    })
    const [info,setInfo] = useReducer(set_the_info,{
        gender:null,
        intrests :null,
        occupation :null,
        isPending :false
    });
   
    console.log("the new info ",info );
    useEffect(() =>{
        const unsub = projectAuth.onAuthStateChanged((user) =>{
            
                dispatch({type:'AUTH_IS_READY',payload:user})
                unsub();
        });

    },[])
    console.log("hey :",state);
  return (
    <AuthContext.Provider value={{...state,dispatch,...info,setInfo}}>
        {children}
    </AuthContext.Provider>
  )
}
