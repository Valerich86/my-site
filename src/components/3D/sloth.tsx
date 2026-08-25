"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

const Model = ({
  targetRotation,
}: {
  targetRotation: { x: number; y: number };
}) => {
  const gltf = useLoader(GLTFLoader, "/models/sloth.glb");
  const { names, actions } = useAnimations(gltf.animations, gltf.scene);

  const currentRotation = useRef({ x: 0, y: 0 });
  const isPlayingAction = useRef(false);

  useEffect(() => {
    if (names.length > 0) {
      console.log("Доступные анимации:", names);
      const idleAction = actions.idle;
      if (idleAction) {
        idleAction.reset();
        idleAction.setLoop(THREE.LoopRepeat, Infinity); // idle — бесконечный цикл
        idleAction.play();
      }
    }
  }, [names, actions]);

  const handleClick = () => {
    const idleAction = actions.idle;
    const actionClip = actions.action;

    if (!actionClip) {
      console.warn('Анимация "action" не найдена! Проверь имя в Blender.');
      return;
    }

    // Останавливаем idle
    idleAction?.stop();

    // Настраиваем action: проиграть ровно 1 раз
    actionClip.reset();
    actionClip.setLoop(THREE.LoopOnce, 1); // LoopOnce + 1 повтор = один проход
    actionClip.play();

    isPlayingAction.current = true;
  };

  useFrame((_, delta) => {
    // Плавное вращение сцены
    currentRotation.current.x +=
      (targetRotation.x - currentRotation.current.x) * 8 * delta;
    currentRotation.current.y +=
      (targetRotation.y - currentRotation.current.y) * 8 * delta;

    gltf.scene.rotation.x = currentRotation.current.x;
    gltf.scene.rotation.y = currentRotation.current.y;

    // Логика переключения по окончанию анимации
    if (isPlayingAction.current) {
      const actionClip = actions.action;
      const idleAction = actions.idle;

      if (!actionClip || !idleAction) return;

      const clip = actionClip.getClip();
      // Если время анимации достигло длительности — значит, она закончилась
      if (actionClip.time >= clip.duration) {
        actionClip.stop();

        // Возвращаем idle в режим цикла и запускаем
        idleAction.reset();
        idleAction.setLoop(THREE.LoopRepeat, Infinity);
        idleAction.play();

        isPlayingAction.current = false;
      }
    }
  });

  return (
    <primitive
      object={gltf.scene}
      scale={1.7}
      onPointerDown={handleClick}
      castShadow
      receiveShadow
    />
  );
};

export default function Sloth() {
  const targetRotation = useRef({ x: 0, y: 0 });
  const isMobile = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth <= 1024;
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile.current) {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.001; 
        const maxRotation = 0.6;
        const minRotation = -0.6;

        targetRotation.current.x = Math.max(
          minRotation,
          Math.min(maxRotation, rotation),
        );
        targetRotation.current.y = Math.max(
          minRotation,
          Math.min(maxRotation, rotation),
        );
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      const handleMouseMove = (event: MouseEvent) => {
        const normalizedX = (event.clientX / window.innerWidth) * 2 - 0.2;
        const normalizedY = -(event.clientY / window.innerHeight) * 2 - 1;

        targetRotation.current.x = -normalizedY * 0.2;
        targetRotation.current.y = normalizedX * 0.7;
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isMobile.current]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`h-20 w-20 lg:h-30 lg:w-30 top-0 -left-5 absolute z-10 transition duration-1000 cursor-pointer`}
      style={{ touchAction: "auto" }}
    >
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Model targetRotation={targetRotation.current} />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </motion.div>
  );
}
