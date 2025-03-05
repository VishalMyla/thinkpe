'use client';

import { motion } from 'framer-motion';

const boxes = [
  { id: 1, title: '3D Modeling', gradient: 'linear-gradient(90deg, #FFFFFF 0%, #5CE4A2 46.9%, #D9EB7F 95%)' },
  { id: 2, title: 'AI & Data Engineer', gradient: 'linear-gradient(90deg, #FFFFFF 0%, #5BE3A2 46.9%, #D9EB7F 95%)' },
  { id: 3, title: 'Product Design', gradient: 'linear-gradient(90deg, #FFFFFF 0%, #45BACC 46.9%, #9FEEC9 95%)' },
  { id: 4, title: 'Automation Engineer', gradient: 'linear-gradient(90deg, #FFFFFF 0%, #45BACC 46.9%, #9FEEC9 95%)' },
];

const MovingBoxes = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-32 mb-8 bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-12 text-center">Two as live, others as coming soon...</h1>
      </div>
     
      <div>
          {[1, 2].map((line) => (
            <div key={line} className="w-full max-w-[500px] overflow-hidden my-4">
              <motion.div
                className="flex gap-5 w-[1000px]"
                animate={{ x: [0, -500] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              >
                {[...boxes, ...boxes].map((box, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-48 h-20 px-6 rounded-xl text-white font-semibold text-center shadow-md"
                    style={{ background: box.gradient }}
                  >
                    {box.title}
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovingBoxes;