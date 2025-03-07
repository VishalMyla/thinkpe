import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
const InteractiveArcPathway = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null); // Fix 1: Explicitly define type

  const steps = [
    { number: "1", title: "Basic Courses", top: 80, left: 300 },
    { number: "2", title: "Intermediate Courses", top: 200, left: 180 },
    { number: "3", title: "Advanced Courses", top: 350, left: 150 },
    { number: "4", title: "Advance Internship", top: 500, left: 180 },
    { number: "5", title: "Job", top: 650, left: 300 }
  ];

  const goalPosition = { top: 350, left: 650 };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 relative min-h-[800px] mb-30">
      <motion.h1 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upskill & Generate My Pathway
      </motion.h1>
      
      <div className="relative w-full h-full">
        {/* UI Designer Box */}
        <motion.div 
          className="absolute z-10 bg-white border-2 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]" 
          style={{ 
            top: goalPosition.top, 
            left: goalPosition.left,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-bold">UI Designer</h3>
        </motion.div>
        
        {/* Steps arranged in an arc */}
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className="absolute flex flex-col items-center gap-2"
            style={{ 
              top: step.top, 
              left: step.left,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.9 }}
            onMouseEnter={() => setActiveStep(step.number)}
            onMouseLeave={() => setActiveStep(null)}
          >
            {/* Number Image and Text Container */}
            <div className="flex flex-row items-center gap-1">
                        <Image 
              src={`/assets/pathway/${step.number}.png`} 
              alt={`Step ${step.number}`} 
              width={48} // Equivalent to w-12 in Tailwind
              height={48} // Equivalent to h-12 in Tailwind
              className="w-12 h-12"
            />
              <span className={`text-lg font-semibold ${activeStep === step.number ? "text-blue-500" : ""}`}>
                {step.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveArcPathway;
