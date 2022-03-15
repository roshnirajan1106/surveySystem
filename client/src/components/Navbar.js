import React from 'react'
import styles from './Navbar.module.css'
import { Link  } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <ul>
    <Link to ="/" className={styles.title}>
          surveySystem
      </Link>
      <Link to ="/signup">signup</Link>
      <Link to="/login">login</Link>
    </ul>
      
      
    </nav>
  )
}

export default Navbar