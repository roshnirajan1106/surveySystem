import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'
const Login = () => {
  const[password,setPassword] = useState('');
  const[email,setEmail] = useState('');
  const {login,error,isPending} = useLogin();
  const handleSubmit =(e) =>{
      e.preventDefault();
      login(email,password)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
    <h2>Login</h2>
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
        {error && <p>{error}</p>}
        {isPending && <button disabled className='btn'>Logining..</button>}
        {!isPending && <button className='btn'>Login</button> }

    </form>
  )
}

export default Login