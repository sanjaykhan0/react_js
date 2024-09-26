// create 
import React, { useEffect, useState } from 'react'

export default function CRUD() {
    
    const [name,setName]=useState('')
    const [sub,setSub]=useState('')

    const [data,setData]=useState([])
  
    useEffect(()=>{
      let storedData = JSON.parse(localStorage.getItem("student"))||[]
      setData(storedData)
    },[])


    let handleclick = ()=>{
      let newUser =[{id:data.length+1,name,sub}]
      // data.push(user)
      let newdata = [...data,newUser]
      setData(newdata)
      localStorage.setItem("student",JSON.stringify(newdata)) ;
        
      // console.log(newdata)

    }

    const handeldel = (id) => {
      const deldata = data.filter((item) => item.id !==id);
      setData(deldata);
      localStorage.setItem("student", JSON.stringify(deldata)); 
    };

  return (
    <div>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='subject' onChange={(e)=>setSub(e.target.value)}/>
      <button onClick={handleclick} >submit</button>

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
                <button color='green'>Edit</button>
                <button color='red' onClick={()=>handeldel(e.id)}>Del</button>
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
