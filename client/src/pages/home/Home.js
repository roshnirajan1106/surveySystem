import React from 'react'
import styles from './Home.module.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import TransactionForm from './TransactionForm'
import {useCollection} from '../../hooks/useCollection'
import {TransactionList} from './TransactionList'
import { Link } from 'react-router-dom'
const Home = () => {
  const {user,setInfo} = useAuthContext()
  const{documents,error} = useCollection(
    'survey'
  ,["uid","==",user.uid]);

  
  return (
    <div className={styles.container}>
      <Link to="/create"><button className={styles.home_btn}>Create</button></Link>
      <Link to="/respond"><button className={styles.home_btn}>Respond</button></Link>
    </div>
  )
}

export default Home