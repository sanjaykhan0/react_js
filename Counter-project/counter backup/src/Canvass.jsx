import { Canvas } from "@react-three/fiber"
import React from "react"
import './Componant/Counter.css'
import { OrbitControls } from "@react-three/drei"
import Counter from "./Componant/Counter"

const Canvass = () => {
  return <Canvas camera={{fov : 35}}>
    <OrbitControls />
    {/* <ambientLight/> */}
    <Counter/>
     
  </Canvas>
    
  
}

export default Canvass
