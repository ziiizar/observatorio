"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MovingElipses = () => {
  // const controls1 = useAnimation();
  // const controls2 = useAnimation();

  // useEffect(() => {
  //   let isMounted = true; // Verificar si el componente está montado

  //   const animate = async () => {
  //     while (isMounted) {
  //       await controls1.start({
  //         x: Math.random() * 300 - 150,
  //         y: Math.random() * 300 - 150,
  //         transition: { duration: 5, ease: "easeInOut" },
  //       });
  //     }
  //   };

  //   animate();

  //   return () => {
  //     isMounted = false;
  //     controls1.stop(); // Detener la animación al desmontar
  //   };
  // }, [controls1]);

  // useEffect(() => {
  //   let isMounted = true;

  //   const animate = async () => {
  //     while (isMounted) {
  //       await controls2.start({
  //         x: Math.random() * 300 - 150,
  //         y: Math.random() * 300 - 150,
  //         transition: { duration: 6, ease: "easeInOut" },
  //       });
  //     }
  //   };

  //   animate();

  //   return () => {
  //     isMounted = false;
  //     controls2.stop(); // Detener la animación al desmontar
  //   };
  // }, [controls2]);

  return (
    <>
      <motion.div
        // animate={controls1}
        className="absolute -top-[30%] -right-[40%] w-full h-[300px] elipse1"
      ></motion.div>
      <motion.div
        // animate={controls2}
        className="absolute -bottom-[30%] w-full h-[300px] elipse2"
      ></motion.div>
    </>
  );
};

export default MovingElipses;
