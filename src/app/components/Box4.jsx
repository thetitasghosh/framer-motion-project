"use client";
//! framer motion keyframe animation example
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import style from "../page.module.css";
const Box4 = () => {


 const containerRef = useRef(null);

  return (
    <>
      <main className={style.main}>

        <div  ref={containerRef.current} >
        <motion.div
         animate={{
          scale: [1, 3, 2, 3, 1],
          rotate: [0, 0, 270, 270, 0],
          x: [0, 1000, 50, 100, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
         }}
         transition={{
          duration: 2,
         }}
          className={style.box}
        >
           
        </motion.div>
        </div>
      </main>
    </>
  );
};

export default Box4;
