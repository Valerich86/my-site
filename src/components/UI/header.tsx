'use client';

import Sloth from "../3D/sloth";
import Logo from "../3D/logo";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

export default function Header () {
  const [fullscreen, setFullscreen] = useState(true);

  useEffect (() => {
    const timer = setTimeout(() => {
      setFullscreen(false);
    }, 3000);
    return ()=> clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed py-10 z-100 flex top-2 left-2 bg-primary rounded-full w-70 border border-accent-dark`}>
      <Sloth isFullscreen={fullscreen}/>
      <Logo isFullscreen={fullscreen}/>
    </div>
  );
}