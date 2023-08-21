"use client";
//! framer motion variants example
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import style from "../page.module.css";
const Box3 = () => {
  const [isanimate, setIsanimate] = useState(false);

  const containerRef = useRef(null);

  const boxVariants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 50,
    
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };
  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      
    },
  };

  return (
    <>
      <main className={style.main}>
        <div ref={containerRef.current}>
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            className={style.box}
          >
            {[1, 2, 3].map((box) => {
              return (
                <motion.li
                  key={1}
                  className={style.boxItem}
                  variants={listVariants}
                ></motion.li>
              );
            })}
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Box3;
