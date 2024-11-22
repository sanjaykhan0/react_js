import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Update({data,setdata}) {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [id, setId] = useState()
    let navigate = useNavigate()

    let  Handlefind = () => {

        let datafind = data.find((e)=>e.id == id)
        setName(datafind.name)
        setAge(datafind.age)

    }
    
    let Handlesubmit = ()=>{
        let newdata
        let updateData = data.map((e)=>e.id == Number(id) ? { ...e, name: name, age: age } : e)
    
        

        setdata(updateData);

        navigate("/")
    
      }
  
    return (
      <div>
        <h1>Create</h1>
  
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={Handlefind}>Submit</button>
        <br />
  
  
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <button onClick={Handlesubmit}>Submit</button>
  
      </div>
  
    )
}
