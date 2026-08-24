"use client";

import Sloth from "../3D/sloth";
import Logo from "../3D/logo";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
  // const [showBorder, setShowBorder] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowBorder(true);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div
      className={`fixed py-10 z-100 flex top-5 left-5 rounded-full w-47 lg:w-70 border 
      bg-secondary border-accent-dar`}
    >
      <Sloth />
      <Logo />
    </div>
  );
}
