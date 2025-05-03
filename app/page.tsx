"use client";

import React from "react";

import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 300, y: 300 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 700, y: 300 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 700, y: 300 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 700, y: 300 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 300, y: 300 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 700, y: 300 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 700, y: 300 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>
      <motion.div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
        }}
        initial={{ opacity: 0, y: -700 }}
        animate={{ opacity: 1, x: 900, y: 200 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="absolute top-0 left-[50%]">Welcome to framer motion</div>
    </>
  );
};

export default page;
