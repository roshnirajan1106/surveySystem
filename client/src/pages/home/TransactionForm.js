import React, { useEffect } from 'react'
import { useState } from 'react'
import {useFirestore} from '../../hooks/useFirestore'
export default function TransactionForm({uid}) {
    const[name,setName] = useState('');
    const[amount,setAmount] = useState('');
    const{response,addDocument} = useFirestore('survey');
    const handleSumbit =(e) =>{
        e.preventDefault();
        addDocument({
            uid,
            name,
            amount
        })

    }
    useEffect(() =>{
        if(response.success){
            setName('');
            setAmount('');
            
        }
    },[response.success])
  return (
    <>
        <h3>Add a transaction</h3>
        <form onSubmit={handleSumbit}>
            <label >
                <span>Transaction Name :</span>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label >
                <span>Transaction Amount :</span>
                <input 
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </label>
            <button >add transaction</button>
        </form>
    </>
  )
}
