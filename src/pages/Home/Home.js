import { KeyboardControls, PointerLockControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { useEffect, useState } from "react";
import { Ground } from '../../components/Ground';
import { Player } from '../../components/Player';
import { Cube } from "../../components/Walls";
import './Home.css';

const Home = () => {
    const [cubes, setCubes] = useState([]);

    useEffect(() => {
        const rooms = [];
        // Define a single room for simplicity
        rooms.push(createRoom(-5, 0, -5, 5, 2, 5, { x: 0, z: -5, width: 3, height: 2 })); // Entrance on one wall

        setCubes(rooms.flat());
      }, []);

    function createRoom(x1, y1, z1, x2, y2, z2, entrance) {
    const wallPattern = [];
    // Create walls with height
    for (let y = y1; y <= y2; y++) {  // Height of the walls
        for (let x = x1; x <= x2; x++) {
        for (let z = z1; z <= z2; z++) {
            // Front and back walls
            if ((x === x1 || x === x2) && !(x === entrance.x && z === entrance.z && y <= entrance.height)) {
            wallPattern.push([x, y, z]);
            }
            // Side walls
            if ((z === z1 || z === z2) && !(x >= entrance.x && x < entrance.x + entrance.width && z === entrance.z && y <= entrance.height)) {
            wallPattern.push([x, y, z]);
            }
        }
        }
    }
    return wallPattern;
    }

    const [isLocked, setIsLocked] = useState(false);

    const handleLock = () => {
        setIsLocked(true);
    }

    const handleUnLock = () => {
        setIsLocked(false);
    }

    return (
            <>
            
            <div id="welcome" style={{ display: "flex", height: '100px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', color: 'white' }}>
                {!isLocked ? 
                <div>
                    <h4>Click to play</h4>
                    <h5>
                        Move: WASD / Arrow Keys
                        <br />
                        Look: MOUSE
                    </h5>
                </div>
                : 
                <div>
                    <h4>Press ESC to exit</h4>
                </div>}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <KeyboardControls
                map={[
                    { name: "forward", keys: ["ArrowUp", "w", "W"] },
                    { name: "backward", keys: ["ArrowDown", "s", "S"] },
                    { name: "left", keys: ["ArrowLeft", "a", "A"] },
                    { name: "right", keys: ["ArrowRight", "d", "D"] },
                    { name: "jump", keys: ["Space"] },
                ]}>
                <Canvas id="canvas" shadows camera={{ fov: 45 }} style={{ height: "calc(100vh - 100px)"}}>
                    <Sky sunPosition={[100, 20, 100]} />
                    <ambientLight intensity={1} />
                    <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
                    <Physics gravity={[0, -30, 0]}>
                        <Ground />
                        <Player />
                        {cubes.map((coords, index) => (
                            <Cube key={index} position={coords} />
                        ))}
                    </Physics>
                    <PointerLockControls onLock={handleLock} onUnlock={handleUnLock}/>
                </Canvas>
            </KeyboardControls>
            </div>
            
            <div className="dot" />
            </>
            
        )
    }
  
export default Home;