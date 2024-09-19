import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls , useGLTF} from '@react-three/drei';
import ThreeDmodel from './Models/ficus.glb';
import './HomePage.css';

const Model = () => {
    const { scene } = useGLTF(ThreeDmodel);

    //Alter the position of the model
    scene.position.set(0, -1.6, 0);

    return <primitive object={scene} scale={[4,4, 4]} />;
};

const ThreeDScene = () => {
  return( 
    <Canvas style={{  width: '50vw', height: '70lvh'}}>

      <ambientLight/>
      <directionalLight position={[-10,-10,-10]}/>
      <directionalLight position={[10,10,10]}/>
      <Model/>
      <OrbitControls  
      minDistance={5}   
      maxDistance={5}  
      enablePan={false} 
      enableRotate={true}
      enableZoom={true}/>
    </Canvas>
  
  )    

}

export default ThreeDScene;