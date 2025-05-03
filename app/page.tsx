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
      <div className="m-auto max-w-[700px] p-5">
        <p>
          Framer Motion is a powerful and intuitive animation library built
          specifically for React applications. It allows developers to add
          fluid, natural-looking animations without needing to rely on low-level
          CSS keyframes or external JavaScript libraries.
        </p>

        <p>
          One of the core strengths of Framer Motion is its declarative syntax,
          which makes it easy to describe how elements should animate from one
          state to another. By using props like <code>initial</code>,{" "}
          <code>animate</code>, and <code>exit</code>, you can define the full
          lifecycle of an animation with clarity.
        </p>

        <p>
          Framer Motion provides support for layout transitions, so when the
          layout of your components changes, animations can handle the shifting
          positions automatically. This is especially useful for building
          dynamic interfaces where components reflow based on user interaction.
        </p>

        <p>
          The library also includes advanced features like gesture recognition.
          You can easily implement drag, tap, hover, and pan interactions with
          minimal code, enabling a more interactive and immersive experience for
          users across devices.
        </p>

        <p>
          Animation controls in Framer Motion allow for fine-grained control
          over sequences, delays, and synchronizations. You can use{" "}
          <code>useAnimation</code> hooks to programmatically start, stop, or
          orchestrate multiple animations in response to user actions or app
          state.
        </p>

        <p>
          With the concept of variants, Framer Motion enables developers to
          define a set of shared animation states that multiple elements can
          inherit. This helps maintain consistency and reduces repetition in
          your animation definitions across a component tree.
        </p>

        <p>
          Framer Motion also supports layout animations using the{" "}
          <code>layout</code> prop. When you toggle elements in and out of the
          DOM, the library animates them smoothly between positions, which
          greatly enhances the visual experience of lists, grids, and cards.
        </p>

        <p>
          Performance is a major focus of Framer Motion. It uses the{" "}
          <code>requestAnimationFrame</code> API and runs animations off the
          main thread when possible, ensuring that transitions feel smooth even
          on low-powered devices or complex UIs.
        </p>

        <p>
          Developers can combine Framer Motion with UI frameworks like Tailwind
          CSS or Chakra UI to build custom animations that align perfectly with
          their existing design systems. The library's flexibility allows it to
          adapt to nearly any styling approach or component structure.
        </p>

        <p>
          Whether you are building simple fade-in effects or highly interactive
          micro-interactions, Framer Motion gives you the tools to create
          delightful user experiences with minimal effort. Its modern
          architecture and well-maintained documentation make it a top choice
          for frontend developers.
        </p>
      </div>
    </>
  );
};

export default Page;
