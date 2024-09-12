import React, { useRef, useState } from 'react'
import { useTexture } from "@react-three/drei"
import * as THREE from "three" 
import { useFrame } from '@react-three/fiber'

const Counter = () => {
  let tex =useTexture('./Untitled-1.png')
  let cyl =useRef(null)
  const [count,setCount]=useState(0)
  useFrame((state,delta)=>{

    cyl.current.rotation.y += delta

  })
  return (<>
    <group rotation={[0,1.5,0.5]}>
    <mesh ref={cyl} >
    <cylinderGeometry args={[1,1,1,30,300,true]} />
    {/* <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} /> */}
    <meshBasicMaterial map={tex} transparent side={THREE.DoubleSide}>
      
    </meshBasicMaterial>
    
  </mesh>
  </group>
  </>
  

  )
}

export default Counter