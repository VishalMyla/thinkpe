// import React, { useEffect, useRef , useState } from 'react';
import CareerPathButton from './CareerPathButton';
import Scribble from '../ImageComponets/landing/Scribble';
import Image from 'next/image';



const TrakHeroSection = () => {
  // const [pathsLoaded, setPathsLoaded] = useState(false);
  // const svgContainerRef = useRef(null);
  
  // useEffect(() => {
  //   // Function to create path data from SVGs and initialize animation
  //   const initializePathAnimation = () => {
  //     // Get references to all path elements
  //     const pathElements = document.querySelectorAll('.path-element');
  //     if (!pathElements.length) return;
      
  //     // Calculate path lengths for animation
  //     const pathLengths = Array.from(pathElements).map(path => path.getTotalLength());
  //     const totalPathLength = pathLengths.reduce((sum, length) => sum + length, 0);
      
  //     // Get text elements to animate
  //     const textElements = document.querySelectorAll('.path-text');
  //     let progress = 0;
      
  //     // Animation function
  //     const animate = () => {
  //       textElements.forEach((item, index) => {
  //         // Distribute items around the path with even spacing
  //         const itemSpacing = totalPathLength / textElements.length;
  //         const itemOffset = (index * itemSpacing) % totalPathLength;
  //         let itemPosition = (progress + itemOffset) % totalPathLength;
          
  //         // Determine which path segment this position falls on
  //         let pathIndex = 0;
  //         let accumulatedLength = 0;
          
  //         while (pathIndex < pathLengths.length) {
  //           if (itemPosition < accumulatedLength + pathLengths[pathIndex]) {
  //             // Found the right path segment
  //             const positionOnPath = itemPosition - accumulatedLength;
  //             const point = pathElements[pathIndex].getPointAtLength(positionOnPath);
              
  //             // Apply transformation to position the text element
  //             item.style.transform = `translate(${point.x}px, ${point.y}px)`;
  //             break;
  //           }
            
  //           accumulatedLength += pathLengths[pathIndex];
  //           pathIndex++;
            
  //           // If we've gone past all paths, use the last path
  //           if (pathIndex >= pathLengths.length) {
  //             pathIndex = pathLengths.length - 1;
  //             const point = pathElements[pathIndex].getPointAtLength(pathLengths[pathIndex]);
  //             item.style.transform = `translate(${point.x}px, ${point.y}px)`;
  //           }
  //         }
  //       });
        
  //       // Increment progress for next animation frame
  //       progress = (progress + 0.5) % totalPathLength;
  //       requestAnimationFrame(animate);
  //     };
      
  //     // Start the animation
  //     animate();
  //   };
    
  //   // Wait for SVGs to be loaded in the DOM
  //   if (pathsLoaded && svgContainerRef.current) {
  //     // Small delay to ensure all SVGs are fully loaded
  //     setTimeout(initializePathAnimation, 100);
  //   }
  // }, [pathsLoaded]);
  
  // // Set paths as loaded when component mounts
  // useEffect(() => {
  //   setPathsLoaded(true);
  // }, []);
  
  return (
    <div className="relative w-full flex flex-col gap-16 min-h-screen bg-white overflow-hidden px-12 py-12 mt-4">
      {/* Main heading */}
      <div className="w-3/4 mb-12">
  <h1
    style={{
      fontFamily: 'Suranna, serif',
      fontWeight: 200,
      fontSize: 'clamp(36px, 5vw, 72px)',
      lineHeight: '1.1',
      letterSpacing: '-0.03em',
      marginBottom: '0.5em',
      whiteSpace: 'pre-line', // Ensures proper line breaks
    }}
  >
    Your dream career isn’t a faraway {'\n'}
    destination – it’s a journey. Trak makes {'\n'}
    sure you’re on the {'\t'}
    <span className="relative inline-block">
      <span
        style={{
          fontFamily: 'Fasthand',
          fontWeight: 400,
          fontSize: 'clamp(34px, 5vw, 70px)',
          lineHeight: '0.85',
          letterSpacing: '-0.03em',
          color: '#4AD295',
          position: 'relative',
          zIndex: 2,
        }}
      >
        right path
      </span>
      <Scribble/>
    </span>
    {'\t'}, every {'\n'}
    step of the way.
  </h1>
</div>
      <div className='flex flex-row'>
        <div className='w-3/5'>
              <p className="text-lg max-w-xl mb-8">
              AI-Powered Personalized Pathways with Exciting Milestones to Turn Your Dreams into Reality.
            </p>
            
            {/* CTA Button */}
            <CareerPathButton  text='Explore My Career Path with Trak' link='/ServiseNotAvailable'/>
        </div>


        <div className='w-100 h-100 bg-black'>
            <Image
          src="/assets/arcs/1.png"
          width={110} height={20}
          alt="Picture of the author"
        />
              <Image
              src="/assets/arcs/2.png"
              width={20} height={80}
              alt='curve'/>
              <Image
            src="/assets/arcs/3.png"
            width={18} height={18}
              alt='curve'/>
              <Image
              src="/assets/arcs/4.png"
              width={20} height={60}
              alt='curve'
              />
        </div>
        
      </div>
      
      {/* Subtitle text */}
     
      
      {/* Dotted path with rotating text elements */}
     
    </div>
  );
};

export default TrakHeroSection;