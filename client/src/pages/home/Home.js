import React from 'react'
import styles from './Home.module.css'
import {useAuthContext} from '../../hooks/useAuthContext'
import TransactionForm from './TransactionForm'
import {useCollection} from '../../hooks/useCollection'
import {TransactionList} from './TransactionList'
const Home = () => {
  const {user} = useAuthContext()
  const{documents,error} = useCollection(
    'survey'
  ,["uid","==",user.uid]);
  console.log(documents);
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        {error && <p>{error}</p>}
        {documents && <TransactionList documents ={documents}/>}
      </div>
      <div className={styles.sidebar}>
          <TransactionForm uid ={user.uid}/>
      </div>
    </div>
  )
}

export default Home