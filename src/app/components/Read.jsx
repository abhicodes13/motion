"use client";
import React from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Read = () => {
  const { user, isAuthenticated } = useKindeAuth();
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-4">Please log in to access the content.</p>
        <LoginLink>Login</LoginLink>
        <RegisterLink>Register</RegisterLink>
      </div>
    );
  }
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
      <div className="m-auto max-w-[700px] p-10 md:p-1 text-md  md:text-xl">
        <p>
          Motion for React is an animation library that's simple to start and
          fun to master. It's the only library with a hybrid engine. This means
          it offers both the hardware accelerated performance of native browser
          animations, coupled with the limitless potential of JavaScript
          animations. It's also trusted by Framer to power its amazing no-code
          animations and gestures. In this guide, we'll learn how to install
          Motion and take a whirlwind tour of its main features.
        </p>
        <p>
          Modern web development relies heavily on animations to create a
          dynamic and interesting user experience. Creating animations in React
          applications can be done using traditional CSS or JavaScript however,
          it can become very cumbersome. Various libraries like GSAP, React
          Spring, anime.js, etc were created to combat the ambiguity in creating
          animations but one worthy to note is Framer Motion. Framer Motion is a
          famous React animation library that makes constructing complicated
          animations easier by providing utility animation components as well as
          hooks. In this article, we will walk you through the features and
          functionalities of Framer Motion.
        </p>
        <p>
          Motion for React is an animation library that's simple to start and
          fun to master. It's the only library with a hybrid engine. This means
          it offers both the hardware accelerated performance of native browser
          animations, coupled with the limitless potential of JavaScript
          animations. It's also trusted by Framer to power its amazing no-code
          animations and gestures. In this guide, we'll learn how to install
          Motion and take a whirlwind tour of its main features.
        </p>
      </div>
      <div className="p-3 text-sm flex items-center justify-center gap-4 bg-black text-white ">
        {" "}
        {user && `Welcome ${user.given_name}`}
        {user && (
          <LogoutLink className="bg-blue-700 px-2 py-1">Logout</LogoutLink>
        )}
      </div>
    </>
  );
};

export default Read;
