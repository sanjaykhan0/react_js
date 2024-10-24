
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, handleGender, setAge, setEditId, setEnterTask, setName, setPriority, updateData } from '../Feature/TaskSlice'
// import { log } from 'three/webgpu'

export default function Home() {
    const dispatch = useDispatch()
    
    const data = useSelector((state)=>{
        return state.taskslice
    })

    const tableStyles = {
        width: "100%",
        borderCollapse: "collapse", 
        backgroundColor:"white",
        padding:"20px"
      };
    
      const thTdStyles = {
        border: "1px solid black", 
        padding: "10px",          
        textAlign: "left",         
      };
    
      const actionButtonStyles = {
        padding: "5px 10px",
        marginRight: "5px",
        cursor: "pointer",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
      };
    
      const deleteButtonStyles = {
        ...actionButtonStyles,
        backgroundColor: "red",  
      };
    
      let handleDelete = (id)=>{
        dispatch(deleteData(id))

      }

      let handleEdit = (data) => {
        dispatch(setEditId(data.id))
        dispatch(setEnterTask(data.enterTask))
        dispatch(setName(data.name))
        dispatch(setAge(data.age))
        dispatch(handleGender(data.gender))
        dispatch(setPriority(data.priority))
      }


      return (
        <div style={{backgroundColor:"white",padding:"20px",width:"600px",marginLeft:"-100px"} }>
          <table style={tableStyles}>
            <thead>
              <tr>
                <th style={thTdStyles}>Id</th>
                <th style={thTdStyles}>Task</th>
                <th style={thTdStyles}>Name</th>
                <th style={thTdStyles}>Age</th>
                <th style={thTdStyles}>Gender</th>
                <th style={thTdStyles}>Priority</th>
                <th style={thTdStyles} colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.taskData.map((e, i) => (
                  <tr key={i}>
                    <td style={thTdStyles}>{e.id}</td>  
                    <td style={thTdStyles}>{e.enterTask}</td>
                    <td style={thTdStyles}>{e.name}</td>
                    <td style={thTdStyles}>{e.age}</td>
                    <td style={thTdStyles}>{e.gender}</td>
                    <td style={thTdStyles}>{e.priority}</td>
                    <td style={thTdStyles}>
                      <button style={actionButtonStyles}  onClick={()=>handleEdit(e)}>Edit</button>
                      <button style={deleteButtonStyles} onClick={()=>handleDelete(e.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
  )
}

