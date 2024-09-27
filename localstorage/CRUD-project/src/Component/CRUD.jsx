/* eslint-disable no-unused-vars */
// create 
import React, { useEffect, useState } from 'react'

export default function CRUD() {
    
    const [name,setName]=useState('')
    const [sub,setSub]=useState('')

    const [data,setData]=useState([])
    const [index,setIndex]=useState()
  
    useEffect(()=>{
      let storeData = JSON.parse(localStorage.getItem("student"))||[]
      setData(storeData)
    },[])


    let handleclick = ()=>{
      
      let newStudent = {id:Date.now(),name:name,sub:sub}
      let storeData = JSON.parse(localStorage.getItem("student"))||[]
      if(index){
         let updataData = data.find((e)=>e.id == index)
         console.log(updataData);
         
         updataData.id = index
         updataData.name = name
         updataData.sub = sub
         localStorage.setItem("student",JSON.stringify(storeData))
         setIndex(null)


      }
      else{
        storeData.push(newStudent)  
      localStorage.setItem("student",JSON.stringify(storeData))
      setData(storeData)
      }
      console.log(storeData);
      

    }

  let handleDelete = (id)=>{
    let storeData = JSON.parse(localStorage.getItem("student"))||[]
    storeData =storeData.filter((e)=> e.id != id )
    localStorage.setItem("student",JSON.stringify(storeData))
    setData(storeData)
  }

  let handleEdit = (id)=>{
    let storeData = JSON.parse(localStorage.getItem("student"))||[]
    let editdata = storeData.find((e)=> e.id == id)
    console.log(editdata)
    setIndex(id)
    setName(editdata.name)
    setSub(editdata.sub)

  }
  return (
    <div>
      <input type="text" value={name} placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <input type="text" value={sub} placeholder='subject' onChange={(e)=>setSub(e.target.value)}/>
      <button onClick={handleclick} >{index?"update":"addData"}</button>

      <table border={2} width={1000} >
        <thead>
          <th>id</th>
          <th>name</th>
          <th>sub</th>
          <th colSpan={2}>Action</th>
        </thead>
        <tbody>

          {data ? data.map((e,i)=>{
            return <tr key={i}>
              <td>{e.id}</td>  
              <td>{e.name}</td>
              <td>{e.sub}</td>
              <td colSpan={2}>
                <button color='green' onClick={()=>handleEdit(e.id)}>Edit</button>
                <button color='red' onClick={()=>handleDelete(e.id)}>Del</button>
              </td>

            </tr>
          }):(
            <tr>
                <td colSpan="3">No data available</td>
            </tr>
        )
        }
        </tbody>
      </table>
      
        


    </div>
  )
}
