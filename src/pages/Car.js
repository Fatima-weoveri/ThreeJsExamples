import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Stage,
  PresentationControls /*OrbitControls, PointerLockControls*/,
} from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/car.glb");
  return <primitive object={scene} {...props} />;
}

const Car = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
    >
      <color attach="background" args={["#101010"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={1}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"sunset"}>
          <Model scale={0.8} />
        </Stage>
      </PresentationControls>
      {/* <PointerLockControls /> */}
      {/* <OrbitControls enablePan={true}/> */}
    </Canvas>
  );
};

export default Car;
