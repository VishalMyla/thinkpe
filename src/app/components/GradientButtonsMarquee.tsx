"use client";

import React from "react";
import { motion } from "framer-motion";

interface GradientButtonProps {
  text: string;
  gradient: string;
  isLeftEdge?: boolean;
  isRightEdge?: boolean;
}

const GradientButtonsMarquee: React.FC = () => {
  const row1: GradientButtonProps[] = [
    {
      text: "⁠AIoT (AI + IoT) & Edge Analytics",
      gradient: "bg-gradient-to-r from-white via-green-400 to-yellow-300",
      isLeftEdge: true,
    },
    {
      text: "Automation Engineer",
      gradient: "bg-gradient-to-r from-white via-blue-400 to-green-300",
    },
    {
      text: "AI & Data",
      gradient: "bg-gradient-to-r from-white via-green-400 to-yellow-300",
    },
    {
      text: "Cyber",
      gradient: "bg-gradient-to-r from-white via-blue-400 to-green-300",
      isRightEdge: true,
    },
  ];

  const row2: GradientButtonProps[] = [
    {
      text: "Growth Hacking & Marketing",
      gradient: "bg-gradient-to-r from-white via-blue-400 to-green-300",
      isLeftEdge: true,
    },
    {
      text: "Product Design",
      gradient: "bg-gradient-to-r from-white via-blue-400 to-green-300",
    },
    {
      text: "3D Modeling",
      gradient: "bg-gradient-to-r from-white via-green-400 to-yellow-300",
    },
    {
      text: "Data Scientists",
      gradient: "bg-gradient-to-r from-white via-blue-400 to-green-300",
      isRightEdge: true,
    },
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-black text-center">
          Two as live other as coming soon..
        </h1>

        <Marquee items={row1} direction="left" />
        <Marquee items={row2} direction="right" />
      </div>
    </div>
  );
};

const Marquee: React.FC<{ items: GradientButtonProps[]; direction: "left" | "right" }> = ({ items, direction }) => {
  return (
    <div className="w-full overflow-hidden flex space-x-8 my-4">
      <motion.div
        className="flex space-x-8"
        animate={{ x: direction === "left" ? "-100%" : "100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {[...items, ...items].map((button, index) => (
          <GradientButton key={index} button={button} />
        ))}
      </motion.div>
    </div>
  );
};

const GradientButton: React.FC<{ button: GradientButtonProps }> = ({ button }) => {
  return (
    <div className="relative flex items-center justify-center px-4">
      {button.isLeftEdge && <EdgeOverlay position="left" />}
      <div className={`px-6 py-3 rounded-lg text-white font-medium ${button.gradient}`}>{button.text}</div>
      {button.isRightEdge && <EdgeOverlay position="right" />}
    </div>
  );
};

const EdgeOverlay: React.FC<{ position: "left" | "right" }> = ({ position }) => {
  return (
    <div
      className={`absolute inset-0 ${position === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"} from-white to-transparent pointer-events-none`}
    />
  );
};

export default GradientButtonsMarquee;
