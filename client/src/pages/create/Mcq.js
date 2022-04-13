import React from 'react'
import './Create.css'
const Mcq = ({form}) => {
  return (
    <div>
      {form.length > 0 && 
        <div className='transactions'>
            {form.map((f) => <div key={f.question}> 
            <p className='name'>Question : {f.question}</p> 
            <p className='option'>options are :</p>
            <ul>
            {f.option.map((i) => <li key={i}>{i}</li>)}
            </ul>
            
            </div>
            
            )} 
                
        </div>}
    </div>
  )
}

export default Mcq