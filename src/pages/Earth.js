import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, /*ContactShadows*/ } from '@react-three/drei';
import EarthModel from '../models/Earth'

const Earth = () => {
  return (
    <Canvas style={{"height": "100vh", backgroundColor: 'black'}}>
        <ambientLight intensity={1}/>
        <OrbitControls />
        <Suspense fallback={null}>
            <EarthModel />
        </Suspense>
        <Environment preset='sunset' />
        {/* <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={50} blur={1} far={10} resolution={256} color={"#FFFFFF"} /> */}
    </Canvas>
  );
}

export default Earth;
