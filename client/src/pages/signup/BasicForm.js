import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'

export const BasicForm = () => {
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');
  const [displayName,setDisplayName] = useState('');
  const handleSubmit =(e) =>{
      e.preventDefault();

  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Please Fill out this Basic form</h2>
    <label>
          <span>display Name:</span>
          <input type="text" 
            onChange={(e) => setDisplayName(e.target.value)}
            required
            value={displayName}
          />
        </label>
        <label>
          <span>email:</span>
          <input type="email" 
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input type="password" 
            onChange={(e) =>setPassword(e.target.value)}
            value = {password}
            required
            
          />
        </label>
        
    </form>
  )
}

