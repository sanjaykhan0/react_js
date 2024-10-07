import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Delete({data , setData}) {
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  const handleDelete = () => {
    const filteredData = data.filter(item => item.id !== Number(id));
    console.log(id);
    setData(filteredData);
    navigate("/");
  }

  return (
    <div>
      <h1>delete</h1>
      <input 
        type="text" 
        placeholder="Enter id" 
        onChange={(e) => setId(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          fontSize: '16px'
        }}
      />
      <button
        onClick={handleDelete}
        style={{
          padding: '8px 16px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>


      <Link to={"/"} >Home</Link>&nbsp;&nbsp;
      <Link to={"/Create"} >Create</Link>&nbsp;&nbsp;
      <Link to={"/Update"} >Update</Link>&nbsp;&nbsp;
    </div>
  )
}
