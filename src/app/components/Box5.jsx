"use client";
//! framer motion useAnimate hook example
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import style from "../page.module.css";
const Box5 = () => {
  const containerRef = useRef(null);

  const click = useAnimation();

  return (
    <>
      <main className={style.main}>
        <div className={style.button}>
          <button
            onClick={() => {
              click.start({
                x: "20vw",
                transition: { duration: 1 },
              });
            }}
          >
            move Right
          </button>
          <button
            onClick={() => {
              click.start({
                x: 0,
                transition: { duration: 1 },
              });
            }}
          >
            move Left
          </button>
          <button
            onClick={() => {
              click.start({
                borderRadius: "50%",
                transition: { duration: 1 },
              });
            }}
          >
            circle
          </button>
          <button
            onClick={() => {
              click.start({
                borderRadius: 0,
                transition: { duration: 1 },
              });
            }}
          >
            square
          </button>

          <button
            onClick={() => {
              click.start({
                rotate: 360,
                transition: { duration: 1 },
              });
            }}
          >
            rotate
          </button>

          <button
            onClick={() => {
              click.stop();
            }}
          >
            stop
          </button>
        </div>
        <div ref={containerRef.current}>
          <motion.div className={style.box} animate={click}></motion.div>
        </div>
      </main>
    </>
  );
};

export default Box5;
