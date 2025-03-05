import { motion } from 'framer-motion';
import Image from 'next/image';

const Irregularshape = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* SVG Background Shape */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src="/assets/arcs/1.svg" alt="Edge 1" width={200} height={200} className="absolute top-0 left-0" />
        <Image src="/assets/arcs/2.svg" alt="Edge 2" width={200} height={200} className="absolute top-0 right-0" />
        <Image src="/assets/arcs/3.svg" alt="Edge 3" width={200} height={200} className="absolute bottom-0 left-0" />
        <Image src="/assets/arcs/4.png" alt="Edge 4" width={200} height={200} className="absolute bottom-0 right-0" />
      </div>

      {/* Animated Texts */}
      <motion.div
        className="absolute top-16 left-10 text-white text-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        Learning
      </motion.div>

      <motion.div
        className="absolute top-16 right-10 text-white text-xl"
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        Upskilling
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-10 text-white text-xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        Achievement
      </motion.div>

      <motion.div
        className="absolute bottom-16 right-10 text-white text-xl"
        animate={{ x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        Success
      </motion.div>
    </div>
  );
};

export default Irregularshape;
