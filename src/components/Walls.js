import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef, useState } from "react";
import dirt from "../assets/dirt.jpg";

export function Cube({ position }) {
    const ref = useRef();
    const texture = useTexture(dirt);
    const [hover, set] = useState(null)

    const onMove = useCallback((e) => {
        e.stopPropagation()
        set(Math.floor(e.faceIndex / 2))
      }, [])
      const onOut = useCallback(() => set(null), [])
      const onClick = useCallback((e) => {
        console.log("clicked!")
        e.stopPropagation()
        // const { x, y, z } = ref.current.translation()
        
      }, [])

    return (
      <RigidBody position={position} type="fixed" colliders="cuboid" ref={ref}>
        <mesh receiveShadow castShadow onPointerMove={onMove} onPointerOut={onOut} onClick={onClick}>
          {[...Array(6)].map((_, index) => (
            <meshStandardMaterial attach={`material-${index}`} key={index} map={texture} color={hover === index ? "black" : "white"}/>
          ))}
          <boxGeometry />
        </mesh>
      </RigidBody>
    );
  }