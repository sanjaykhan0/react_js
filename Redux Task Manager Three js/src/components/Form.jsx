import React, { useState } from 'react'
import "./Form"
import { useDispatch, useSelector } from 'react-redux';
import { addData, handleGender, setAge, setEnterTask, setName, setPriority, updateData } from '../Feature/TaskSlice';

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

  const data = useSelector((state) => {
    return state.taskslice
  })
  const dispatch = useDispatch()
  let handleclick = () => {
    if (data.editId > 0) {
      dispatch(updateData({ id: data.editId, enterTask: data.enterTask, name: data.name, age: data.age, gender: data.gender, priority: data.priority }))
    } else {
      dispatch(addData({ id:data.taskData.length +1 , enterTask: data.enterTask, name: data.name, age: data.age, gender: data.gender, priority: data.priority }))
    }
    dispatch(setEnterTask(''))
    dispatch(setName(''))
    dispatch(setAge(''))
    dispatch(handleGender('male'))
    dispatch(setPriority('high'))
  }



  return (
    <div style={{borderRadius:"10px", backgroundColor:"white" , padding:"15px"}}>
      <input value={data.enterTask} type="text" placeholder="Enter your task" style={formStyles.input} onChange={(e) => dispatch(setEnterTask(e.target.value))} />
      <input value={data.name} type="text" placeholder="Enter your name" style={formStyles.input} onChange={(e) => dispatch(setName(e.target.value))} />
      <input value={data.age} type="text" placeholder="Enter your age" style={formStyles.input} onChange={(e) => dispatch(setAge(e.target.value))} />
      <br />
      <span style={formStyles.span}>
        Male : <input type="radio" checked={data.gender === "male"} value="male" name="gender" style={formStyles.radio} onChange={() => dispatch(handleGender('male'))} />
      </span>
      <span style={formStyles.span}>
        Female : <input type="radio" checked={data.gender === "female"} value="female" name="gender" style={formStyles.radio} onChange={() => dispatch(handleGender('female'))} />
      </span>
      <br />
      <select style={formStyles.input} value={data.priority} onChange={(e) => dispatch(setPriority(e.target.value))}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <br />
      <button style={formStyles.button} onClick={handleclick}>Submit</button>
    </div>
  );
};

