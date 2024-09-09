import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function App() {
  let arr = ["red","green","yellow","orange"]
  const count=useRef()
  const sec3=useRef()
  useEffect(()=>{
    setTimeout(()=>{
      count.current.focus()
    },2000)


    if(sec3.current.value=== ""){
      sec3.current.style.border='1px solid red'
    }

  },[])

  const sec=useRef()
  const focusclick = ()=>{
    sec.current.style.backgroundColor = 'rgba(181, 44, 44, 0.243)';
  }


  // let empty= document.querySelector("input")

  return (
    <>

    {
      arr.map((item,index)=>{
        return <li key={index}>{item}</li>
      })
    }
    <input type="text" ref={count}  /><br /><br />
    <input type="text" ref={sec} /><br /><br />
    <button onClick={focusclick}>click</button><br /><br />
    
    <input type="text" ref={sec3} />




    </>
  )
}
