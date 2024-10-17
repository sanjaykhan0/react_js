import React, { useState } from 'react'
import "./Form"
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../Feature/TaskSlice';

export default function Form() {
  const formStyles = {
    input: {
      margin: '10px 0',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
    },
    radio: {
      margin: '0 5px',
    },
    span: {
      marginRight: '10px',
    },
    button: {
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [enterTask,setEnterTask] = useState('')
  const [gender,setGender]= useState('')
  const [priority,setPriority] = useState('')
  
  const data = useSelector((state)=>{
    return state.taskslice
  })
  const dispatch = useDispatch()

  let handleGender = ()=>{
    if(gender == "male"){
      setGender("Male")
    }
    else{
      setGender("Female")
    }

  }

  let handleclick = ()=>{
    dispatch(addData({id:Date.now(),enterTask,name,age,gender,priority}))
    setEnterTask('')
    setName('')
    setAge('')
    setGender('')
    setPriority('')
    
  }



  return (
    <div>
      <input value={enterTask} type="text" placeholder="Enter your task" style={formStyles.input} onChange={(e)=>setEnterTask(e.target.value)} />
      <input value={name} type="text" placeholder="Enter your name" style={formStyles.input}  onChange={(e)=>setName(e.target.value)}  />
      <input value={age} type="text" placeholder="Enter your age" style={formStyles.input}  onChange={(e)=>setAge(e.target.value)}  />
      <br />
      <span style={formStyles.span}>
        Male : <input type="radio" value={gender}  name="gender" style={formStyles.radio} onClick={handleGender} />
      </span>
      <span style={formStyles.span}>
        Female : <input type="radio" value={gender} name="gender" style={formStyles.radio} onClick={handleGender} />
      </span>
      <br />
      <select style={formStyles.input} value={priority} onChange={(e)=>setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <button style={formStyles.button} onClick={handleclick}>Submit</button>
    </div>
  );
};