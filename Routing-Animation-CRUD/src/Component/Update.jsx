import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Update({data,setData}) {
  const [id, setId] = useState(null)
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [phone,setPhone] = useState()
  const [address,setAddress] = useState()


  const handlefind = () => {

     let datafind = data.find((e) => e.id == id)

     setName(datafind.name)
     setEmail(datafind.email)
     setPhone(datafind.phone)
     setAddress(datafind.address)

    

   
   
  }
  const handleUpdate = ()=>{

  }

  return (
    <div>
      <h1>update</h1>

      <Link to={"/"} >Home</Link>&nbsp;&nbsp;
      <Link to={"/Create"} >Create</Link>&nbsp;&nbsp;
      <Link to={"/Delete"} >Delete</Link>&nbsp;&nbsp;
      <center>
    <input type="text" onChange={(e) => setId(e.target.value)} placeholder='find id' style={{ padding: '5px', marginRight: '10px', borderRadius: '3px', border: '1px solid #ccc' }} /> <br /><br /> 
    <button onClick={handlefind} style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>find</button><br /><br /><hr /> <br />
   
    <input 
      type="text" 
      value={name} 
      placeholder='Name'
      onChange={(e)=>setName(e.target.value)} 
      style={{ padding: '5px', marginRight: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc', width: '200px' }}
    /> <br /><br />
    <input 
      type="text" 
      value={email} 
      placeholder='Email'
      onChange={(e)=>setEmail(e.target.value)} 
      style={{ padding: '5px', marginRight: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc', width: '200px' }}
    /><br /><br />
    <input 
      type="text" 
      value={phone} 
      placeholder='Phone'
      onChange={(e)=>setPhone(e.target.value)} 
      style={{ padding: '5px', marginRight: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc', width: '200px' }}
    /><br /><br />
    <input 
      type="text" 
      value={address} 
      placeholder='Address'
      onChange={(e)=>setAddress(e.target.value)} 
      style={{ padding: '5px', marginRight: '10px', marginBottom: '10px', borderRadius: '3px', border: '1px solid #ccc', width: '200px' }}
    /><br /><br />
    <button 
      onClick={handleUpdate}
      style={{ padding: '5px 10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
    >
      Update
    </button>
    </center>


    </div>
  )
}
