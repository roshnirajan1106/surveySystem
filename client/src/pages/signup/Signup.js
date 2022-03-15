import styles from './Signup.module.css'
import React, { useState } from 'react'

import { useSignup } from '../../hooks/useSignup';
const Signup = () => {
  const[displayName,setDisplayName]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const{error,loading,signup} = useSignup();
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(displayName,email,password);
    signup(email,password,displayName);
  }
  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <label>
      <span>display name:</span>
        <input type="text"
          value={displayName}
          required
          onChange={(e) =>setDisplayName(e.target.value)}
        />
      </label>
      <label>
      <span>email:</span>
        <input type="text"
          value={email}
          required
          onChange={(e) =>setEmail(e.target.value)}
        />
      </label>
      <label>
      <span>password:</span>
        <input type="text"
          value={password}
          required
          onChange={(e) =>setPassword(e.target.value)}
        />
      </label>
      {!loading  && <button className='btn'>Signup</button>}
      {loading && <button className='btn' disabled>loading..</button>}
      {error && <p>{error}</p>}
      
    </form>
  )
}

export default Signup