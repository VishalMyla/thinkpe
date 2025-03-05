import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-50">
      <button className="text-2xl">\u2630</button>
      <img src="/path-to-trak.png" alt="Trak Logo" className="h-8" />
      <button className="bg-white shadow-lg px-4 py-2 rounded">Try Us</button>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <h1 className="text-5xl font-bold">Welcome to Trak</h1>
    </section>
  );
};

const AnimatedBubbles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 flex justify-center items-center"
    >
      <img src="/path-to-animation.png" alt="Bubbles Animation" className="w-full h-full object-cover" />
    </motion.div>
  );
};

const LandingPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <Navbar />
      {!animationComplete && <AnimatedBubbles />}
      {animationComplete && <Hero />}
    </div>
  );
};

export default LandingPage;