import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import Form from "./components/Form";
import Home from "./components/Home";

function App() {
  return (
    <> 
{/*     
    <Canvas
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
      <Experience />
    </Canvas> */}

    <Form/>
    <Home/>
    </>
  );
}

export default App;
