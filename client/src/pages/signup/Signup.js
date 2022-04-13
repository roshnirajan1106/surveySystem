import React, { useEffect } from 'react'
import styles from './Signup.module.css'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'
import { useHistory } from 'react-router-dom';
const Signup = () => {
  const[password,setPassword] = useState('');
  const history = useHistory();
  const[email,setEmail] = useState('');
  const [displayName,setDisplayName] = useState('');
  const {error,isPending,signup,success} = useSignup();
  const handleSubmit =(e) =>{
      e.preventDefault();
      signup(email,password,displayName)

  }
 
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
    <h2>Sign up</h2>
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
        {!isPending && <button className='btn'>Signup</button>}
        {isPending && <button disabled className='btn'>loading</button>}
        
        {error && <p>{error}</p>}
    </form>
  )
}

export default Signup