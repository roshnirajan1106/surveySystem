import React from 'react'
import { useState,useRef } from 'react'
import Mcq from './Mcq';

const Create = () => {
    const[value,setValue] = useState('');
    const count = useRef(0);
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    const[question,setQuestion] = useState('');
    const[options,setOptions] = useState([]);
    const[option,setOption] = useState('');
    const[form,setForm] = useState([]);
    

    const handleSubmit = (e) =>{
     e.preventDefault();
    const ing = option.trim();
    if(ing && !options.includes(ing)){
      setOptions((prev)  =>[...prev,ing] )
    }
    setOption('');
   
    }
    const question_submit = (e) =>{
            let res ={type:value,question:question,option:options};
            console.log(res);
            const arr =form;
            arr.push(res);
            setForm(arr);
            console.log(form);
            setQuestion('');
            setOptions('');
            count.current = count.current + 1;
    }
    const form_submit = (e) =>{
            e.preventDefault();
            //console.log(form);

    }
  return (
    <div>
        <Mcq form={form}/>
        <label>Select the type of question
        <span>
            <select value={value} onChange={handleChange}>
            <option value="N/A">N/A</option>
            <option value="mcq">mcq</option>
            <option value="sub">subjective</option>
            </select>
        </span>
        </label>
        
        <form onSubmit={form_submit}>
            {value === "mcq" && 
            <div>
                <label>
                    <span>question</span>
                    <input type="text" value={question} 
                    onChange = {(e) => setQuestion((e.target.value))} />
                    <span>options :</span>
                    <input
                    type="text"
                    value={option}
                    onChange= {(e) =>setOption(e.target.value) }
              />
              <button onClick={handleSubmit} className='btn'>add</button>
              
              {options.length > 0 && <p>options are: {options.map(e => <em key ={e}> {e},</em>)}</p>} 
              <br></br>
              <button onClick ={question_submit}className='btn'>add question</button>
          
                </label>

                </div>
                
             }
          <button onClick={form_submit}>submit</button>
        </form>
       

    </div>
  )
}

export default Create