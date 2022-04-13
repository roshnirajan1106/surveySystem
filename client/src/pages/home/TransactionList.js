import React from 'react'
import styles from './Home.module.css'
export const TransactionList = ({documents}) => {

    return(
        <ul className={styles.transactions}>
            {documents.map((doc) =>(
                <li key={doc.id}>
                    <p className={styles.name}>
                        {doc.name}
                    </p>
                    <p className={styles.amount}>
                        {doc.amount}
                    </p>
                </li>
            ))}
        </ul>
    )
}

