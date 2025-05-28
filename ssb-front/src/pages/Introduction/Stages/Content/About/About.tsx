import { AboutProps } from "@/types/components/pages/introduction/Content/About.type";
import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

import styles from './about.module.scss';

export default function About({scroll,nextStage}:AboutProps) {
    const BasicParticles = ()=>{
        const points = useRef(null!);

        return(
            <points ref={points}>
                <sphereGeometry args={[10,48,48]}/>
                <pointsMaterial color="#5786F5" size={0.1} sizeAttenuation/>
            </points>
        )
    }
    return <div>
        <section className={styles.canvas}>
        <Canvas camera={{ position: [0, 1, -10] }}>
            <ScrollControls pages={30} >
                <Scroll html>
                    <div></div>
                </Scroll>
                
              <ambientLight intensity={2.5} />
              <pointLight position={[10, 10, 10]} />
              
              <BasicParticles />
              
              <gridHelper args={[10, 10]} />
              <axesHelper args={[8]} />
              <OrbitControls/>
              
            </ScrollControls>
            
          </Canvas>
          </section>
          </div>
}
