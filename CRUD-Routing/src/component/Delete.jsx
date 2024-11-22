import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Delete({data, setdata}) {
    const [id, setId] = useState()

    let navigate = useNavigate()

    let Handledel = () => {
        let delData = data.filter((e) => e.id != id)
        setdata(delData)
        navigate("/")


    }


    return (
        <div>
            <h1>Create</h1>


            <input type="number"  onChange={(e) => setId(e.target.value)} />
            <button onClick={Handledel}>delete</button>

        </div>
    )
}
