import { useEffect, useRef } from 'react';
import Image from 'next/image';

const JourneyPathway = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const arrow = arrowRef.current;
      if (!arrow) return;

      const rect = (arrow as HTMLElement).getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      
      if (isVisible) {
        (arrow as HTMLElement).style.animation = 'moveArrow 3s ease-in-out forwards';
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once to check if already in view on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full py-16 px-4 md:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Know Yourself Section */}
          <div className="md:w-1/3 mb-12 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              <Image 
                src="/Assets/paths/knowyourself.svg" 
                alt="Know Yourself" 
                width={120} 
                height={120}
                className="mb-4"
              />
              <h2 className="text-3xl font-bold mb-4">Know Yourself</h2>
              <div className="text-base text-gray-700 mb-6">
                <p className="mb-4">
                  Every journey starts with understanding where you are.
                  Trak begins by learning about you: your skills, experiences,
                  career goals, and preferences. Through a quick
                  assessment, we gather the insights needed to tailor a
                  pathway just for you.
                </p>
                <ul className="list-disc pl-6">
                  <li className="mb-2">
                    What you do: Complete a quick skkills and career goal
                    survey.
                  </li>
                  <li>
                    What Trak does: Analyzes your inputs using AI to
                    identify your skill gaps and opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Curved Path with Arrow */}
          <div className="absolute top-1/2 left-0 w-full h-64 -z-10 hidden md:block">
            <Image 
              src="/Assets/paths/curve.svg" 
              alt="Path Curve" 
              fill
              style={{ objectFit: 'contain' }}
            />
            <div 
              ref={arrowRef} 
              className="absolute left-1/3 top-0"
              style={{ transform: 'translateX(-50%)', opacity: 0 }}
            >
              <Image 
                src="/Assets/paths/arrow.svg" 
                alt="Path Arrow" 
                width={24} 
                height={24}
              />
            </div>
          </div>

          {/* See Your Path Section */}
          <div className="md:w-1/3 flex flex-col items-center md:items-end">
            <Image 
              src="/Assets/paths/seeyourpath.svg" 
              alt="See Your Path" 
              width={120} 
              height={120}
              className="mb-4"
            />
          </div>
        </div>
      </div>

      {/* CSS for Arrow Animation */}
      <style jsx global>{`
        @keyframes moveArrow {
          0% {
            left: 30%;
            top: 40%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            left: 85%;
            top: 85%;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default JourneyPathway;