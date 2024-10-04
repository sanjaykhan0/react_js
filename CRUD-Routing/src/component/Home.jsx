import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({data}) {
  return (
    <div>
      <Link to={"/Create"}>Create</Link>
      <Link to={"/Update"}>Update</Link>
      <Link to={"/Delete"}>Delete</Link>


      {
        data && data.map((e,i)=>{
            return <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
            </tr>

        })
      }
    </div>
  )
}
