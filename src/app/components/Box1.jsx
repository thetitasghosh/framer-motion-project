"use client";
//! framer motion animate props example
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import style from "../page.module.css";
const Box1 = () => {
  const [isanimate, setIsanimate] = useState(false);

 const containerRef = useRef(null);

//  useEffect(() => {
//   const el = document.querySelector("#con");
//   containerRef.current = el;
// }, []);

  return (
    <>
      <main className={style.main}>

        <div  ref={containerRef.current} >
        <motion.div
          animate={{
            scale: isanimate ? 2 : 1,
            x: isanimate ? 100 : 0,
          }}
          whileHover={{
            scale: 1.2,
          }}
          whileTap={{
            rotate:60
          }}
          transition={{
            type: "spring",
            duration: 1,
          }}
        //   drag
        //   dragConstraints={{
        //     top: -50,
        //     left: -70,
        //     right: 70,
        //     bottom: 50,}}
          onClick={() => setIsanimate(!isanimate)}
          className={style.box}
        >
           
        </motion.div>
        </div>
      </main>
    </>
  );
};

export default Box1;
