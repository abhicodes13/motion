"use client";
import React from "react";

import { motion, useScroll, useSpring } from "framer-motion";

const Page = () => {
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <>
      <motion.div
        className={`sticky origin-left top-0 w-[100%] h-10 bg-fuchsia-600`}
        style={{
          scaleX: spring,
        }}
      ></motion.div>{" "}
      <div className="text-2xl tracking-tighter font-semibold text-center mt-10 mb-20">
        Framer Important features and hooks{" "}
      </div>
      <div className="m-auto max-w-[700px] p-5">hello</div>
    </>
  );
};

export default Page;
