import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  decrement, increment, mul } from './feature/CounterSlice'


export default function App() {
  const count = useSelector((state) => state.counter.value)
  const alfa = useSelector((state) => state.counter.value2)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{count}</h1>
      <h1>{alfa}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(mul())}>Alfa (Append '1')</button>
      
    </div>
  )
}
