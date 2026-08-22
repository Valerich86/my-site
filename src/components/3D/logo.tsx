"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/models/logo.glb");
  const { names, actions } = useAnimations(gltf.animations, gltf.scene);
  useEffect(() => {
    if (names.length === 0) return;
    names.forEach((name) => {
      const action = actions[name];
      if (action) {
        action.reset();
        action.setLoop(THREE.LoopRepeat, Infinity);
        action.play();
      }
    });
  }, [names, actions]);

  return <primitive object={gltf.scene} castShadow receiveShadow scale={1.5} />;
};

export default function Logo({isFullscreen}:{isFullscreen: boolean}) {
  const lightColor = "#ffffff";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
      className={`h-20 w-50 absolute top-0 left-15 transition-transform duration-1000 `}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 3, 0.2], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Общий мягкий свет, чтобы тени не были абсолютно чёрными */}
          <ambientLight color={lightColor} intensity={2} />

          <directionalLight
            position={[-6, 8, 4]} // свет сбоку и сверху — тень уйдёт назад на стену
            intensity={2}
            castShadow
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-camera-near={0.5}
            shadow-camera-far={60}
          />
          <Model />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
