"use client";

import React from "react";

import { motion, useScroll, useSpring } from "framer-motion";

const page = () => {
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
      <div className="m-auto max-w-[700px] p-5">
        <p>
          Framer Motion is a popular animation library for React that provides a
          simple and powerful API for creating smooth animations. It is built on
          top of the Framer library and leverages the power of the `motion`
          component, which acts as a drop-in replacement for standard HTML and
          SVG elements. By wrapping elements with `motion.div`, `motion.svg`,
          etc., you can easily apply animations, transitions, and gestures with
          just a few props.
        </p>
        <br />
        <p>
          To start using Framer Motion, you need to install it in your React
          project by running `npm install framer-motion` or `yarn add
          framer-motion`. Once installed, you can import the `motion` object and
          begin animating elements using props like `initial`, `animate`,
          `exit`, and `transition`. This allows for simple and declarative
          animations such as fading elements in and out, scaling components, or
          animating position changes.
        </p>
        <br />
        <p>
          One of the key features of Framer Motion is its support for shared
          layout animations through the `layout` prop. This allows components to
          animate smoothly between layout changes without writing complex
          animations manually. When you toggle visibility or re-arrange elements
          that use `layout`, Framer Motion interpolates the transformation,
          resulting in visually pleasing transitions that enhance user
          experience.
        </p>
        <br />
        <p>
          The `animatePresence` component is another essential feature of Framer
          Motion that helps animate components when they enter and exit the DOM.
          By wrapping conditional components in ``, Framer Motion ensures exit
          animations are executed before the component is removed from the tree.
          This is especially useful for modals, toasts, and dynamic route
          transitions in Next.js or React Router.
        </p>
        <br />
        <p>
          Framer Motion supports complex gestures using the `drag`, `hover`,
          `tap`, and `whileInView` props. With these, you can easily implement
          interactive UI behavior, such as draggable cards, hover effects for
          buttons, tap animations for mobile, and scroll-based reveal
          animations. The built-in spring physics and inertia-based motion makes
          interactions feel natural and fluid.
        </p>
        <br />
        <p>
          For more customized and advanced control over animations, Framer
          Motion provides powerful hooks like `useAnimation` and
          `useMotionValue`. `useAnimation` allows you to start and control
          animations programmatically, which is useful in scenarios like
          triggering an animation after a delay or on a specific event.
          Meanwhile, `useMotionValue` lets you track and animate values
          directly, enabling synchronized motion with gestures or scroll
          position.
        </p>

        <p>
          Framer Motion supports keyframes for defining multiple states in one
          animation sequence. You can pass an array of values to the `animate`
          prop, and combine it with a `transition` prop that defines how long
          each step lasts. This makes it possible to create advanced animations
          such as bouncing effects, loops, or staggered sequences between
          multiple states or positions.
        </p>

        <p>
          Another powerful capability is variants. Variants are a way to define
          multiple animation states in a single object and then refer to them by
          name using the `variants`, `initial`, and `animate` props. This keeps
          your code organized and makes it easier to animate groups of elements
          in a coordinated manner — useful for menu animations or interactive
          dashboards.
        </p>

        <p>
          Staggered animations are easy with the `staggerChildren` and
          `delayChildren` properties inside the `transition` prop. These options
          are ideal for animating lists or collections of items where each child
          enters the view sequentially. When used with `AnimatePresence`, these
          animations also handle exit sequences with equal polish and
          performance.
        </p>

        <p>
          Framer Motion is not just about animations — it is built to scale with
          teams and performance in mind. It uses hardware-accelerated
          animations, reduces layout thrashing, and provides intuitive APIs that
          are developer-friendly. Whether you're building a simple hover effect
          or an immersive animated experience, Framer Motion delivers
          high-quality animations with ease in modern React applications.
        </p>

        <p>
          In summary, Framer Motion is a powerful and flexible animation library
          for React that simplifies the process of creating complex animations
          and interactions. With its intuitive API, support for shared layout
          animations, gesture handling, and advanced features like variants and
          staggered animations, it is an excellent choice for developers looking
          to enhance their user interfaces with smooth and engaging animations.
        </p>
      </div>
    </>
  );
};

export default page;
