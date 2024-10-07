"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MovingElipses = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls1.start({
          x: Math.random() * 300 - 150, // Movimiento más pronunciado en x
          y: Math.random() * 300 - 150, // Movimiento más pronunciado en y
          transition: { duration: 5, ease: "easeInOut" }, // Más rápido
        });
      }
    };
    animate();
  }, [controls1]);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls2.start({
          x: Math.random() * 300 - 150, // Movimiento más pronunciado en x
          y: Math.random() * 300 - 150, // Movimiento más pronunciado en y
          transition: { duration: 6, ease: "easeInOut" }, // Más rápido
        });
      }
    };
    animate();
  }, [controls2]);

  return (
    <>
        <motion.div
          animate={controls1}
          className="absolute -top-[30%] -right-[40%] w-full h-[300px] elipse1"
        ></motion.div>
      <motion.div
        animate={controls2}
        className="absolute -bottom-[30%] w-full h-[300px] elipse2"
      ></motion.div>
    </>
  );
};

export default MovingElipses;
