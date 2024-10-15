import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, EditData } from "../feature/CrudSlice";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [Index,setIndex] = useState("")


  const data = useSelector((state) =>{
    return state.crudSlice});
  const dispatch = useDispatch();

  let handlesubmit = () => {
    if(Index){
      dispatch(EditData({id:Index,name,age}))
      setIndex(null)
    }
    else{
      dispatch(addData({ id: Date.now(), name, age }));
    }
    setName("");
    setAge("");
  };
  let handledel = (id)=>{
    dispatch(deleteData(id))
  }
  let handleEdit = (id)=>{
    setIndex(id)
    // dispatch(EditData({id:Index,name,age}))
    let findData = data.student.find((e)=>e.id == id)
    setName(findData.name)
    setAge(findData.age)

  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={age}
        placeholder="Enter your age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={handlesubmit}>{Index?"Update Data" : "Add Data"}</button>

      {data &&
        data.student.map((e,i) => {
          return (
            <ul key={i}>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.age}</li>
              <li>
                <button onClick={()=>handleEdit(e.id)}>edit</button>
                <br />
                <button onClick={()=>handledel(e.id)}>delete</button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
