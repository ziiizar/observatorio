"use client";

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

const MovingElipses = () => {
  // const controls1 = useAnimation();
  // const controls2 = useAnimation();

  // useEffect(() => {
  //   let isMounted = true;

  //   const animateElipse = async (control, duration) => {
  //     while (isMounted) {
  //       await control.start({
  //         x: Math.random() * 300 - 150,
  //         y: Math.random() * 300 - 150,
  //         scale: [1, 1.2, 1],
  //         opacity: [1, 0.8, 1],
  //         transition: { duration, ease: "easeInOut" },
  //       });
  //     }
  //   };

  //   animateElipse(controls1, 5);
  //   animateElipse(controls2, 6);

  //   return () => {
  //     isMounted = false;
  //     controls1.stop();
  //     controls2.stop();
  //   };
  // }, [controls1, controls2]);

  return (
    <>
      <div
        // animate={controls1}
        className="w-full h-[300px] elipse1"
        style={{ position: "absolute", top: "-20%", right: "-30%" }}
      />
      <div
        // animate={controls2}
        className="w-full h-[300px] elipse2"
        style={{ position: "absolute", bottom: "-20%", left: "0" }}
      />
    </>
  );
};

export default MovingElipses;
