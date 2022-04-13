import React, { useEffect } from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import {useFirestore} from '../../hooks/useFirestore'
import useSignup from '../../hooks/useSignup';
import {useCollection} from '../../hooks/useCollection'


export const BasicForm = () => {
  const[gender,setGender] = useState('');
  const[intrests,setIntrests] = useState('');
  const[occupation,setOccupation] = useState('');
  const{response,addDocument} = useFirestore('users');
  const {user,info,setInfo} = useAuthContext();
  console.log(user.uid);
  const{basicform_details} = useSignup();
  const{documents} = useCollection(
    'users'
  ,["uid","==",user.uid]);
  console.log("heybasic form document ",documents);
  if(documents && documents.length !==0){
    setInfo({type:'addinfo',payload:documents})
  }
  let res =[];
  const handleSubmit =(e) =>{
      e.preventDefault();
      const uid= user.uid;
      console.log("inside basic",uid);
      addDocument({
        uid,
        gender,
        intrests,
        occupation
    })
    res = [gender,intrests,occupation]
    basicform_details(res);
    
  } 
  

  return (
   
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Please Fill out this Basic form</h2>
    <label>
          <span>gender:</span>
          <input type="text" 
            onChange={(e) => setGender(e.target.value)}
            required
            value={gender}
          />
        </label>
        <label>
          <span>intrests:</span>
          <input type="email" 
            onChange={(e) => setIntrests(e.target.value)}
            required
            value={intrests}
          />
        </label>
        <label>
          <span>occupation:</span>
          <input type="password" 
            onChange={(e) =>setOccupation(e.target.value)}
            value = {occupation}
            required
            
          />
        </label>
        <button className='btn'>submit</button>
    </form>
  
  )
}

