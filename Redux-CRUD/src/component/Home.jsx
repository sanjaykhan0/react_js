import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const data = useSelector((state) => {
    return state.crud.data;
  });

  const dispatch = useDispatch();

  let handlesubmit = () => {
    console.log(name, email);
    dispatch(addrec({ id: Date.now(), name, email }));
    setName("");
    setEmail("");
  };
  let handledel = () => {

  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handlesubmit}>Submit</button>

      {data &&
        data.data.map((e, i) => {
          return (
            <ul key={i}>
              <li>{e.id}</li>
              <li>{e.name}</li>
              <li>{e.email}</li>
              <li>
                <button>edit</button>
                <br />
                <button onClick={()=>handledel(e.id)}>delete</button>
              </li>
            </ul>
          );
        })}
    </div>
  );
}
