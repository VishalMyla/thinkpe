import React, { useEffect, useState } from 'react';

const TechRolesCarousel = () => {
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  
  // Animation logic for both rows of tech roles
  useEffect(() => {
    const animateRow1 = () => {
      setPosition1((prevPos) => {
        if (prevPos <= -2000) return 800;
        return prevPos - 1;
      });
    };
    
    const animateRow2 = () => {
      setPosition2((prevPos) => {
        if (prevPos <= -2000) return 800;
        return prevPos - 1.2; // Slightly faster
      });
    };
    
    const interval1 = setInterval(animateRow1, 20);
    const interval2 = setInterval(animateRow2, 20);
    
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  // Tech role data for both rows
  const techRoles1 = [
    { title: "AIoT (AI + IoT) & Edge Analytics", gradient: "from-green-200 to-blue-200" },
    { title: "Automation Engineer", gradient: "from-blue-200 to-green-200" },
    { title: "AI & Data", gradient: "from-green-200 to-yellow-200" },
    { title: "Cyber", gradient: "from-blue-200 to-green-200" },
    // Duplicated for continuous scrolling
    { title: "AIoT (AI + IoT) & Edge Analytics", gradient: "from-green-200 to-blue-200" },
    { title: "Automation Engineer", gradient: "from-blue-200 to-green-200" },
    { title: "AI & Data", gradient: "from-green-200 to-yellow-200" },
    { title: "Cyber", gradient: "from-blue-200 to-green-200" },
  ];
  
  const techRoles2 = [
    { title: "Hacking & Marketing", gradient: "from-green-200 to-blue-200" },
    { title: "Product Design", gradient: "from-blue-200 to-green-200" },
    { title: "3D Modeling", gradient: "from-green-200 to-yellow-200" },
    { title: "Data Scientists", gradient: "from-teal-200 to-green-200" },
    // Duplicated for continuous scrolling
    { title: "Hacking & Marketing", gradient: "from-green-200 to-blue-200" },
    { title: "Product Design", gradient: "from-blue-200 to-green-200" },
    { title: "3D Modeling", gradient: "from-green-200 to-yellow-200" },
    { title: "Data Scientists", gradient: "from-teal-200 to-green-200" },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-16">
      {/* Heading with specified styles */}
      <h1 
        className="text-center mb-32 px-4"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '3rem',
          // lineHeight: '153px',
          letterSpacing: '-2.5%',
          // maxWidth: '1200px'
        }}
      >
        Two as live other as coming soon..
      </h1>
       
      {/* First row of scrolling tech roles */}
      <div className="relative w-full overflow-hidden h-24 mb-8">
        <div 
          className="absolute flex space-x-6 whitespace-nowrap"
          style={{ transform: `translateX(${position1}px)` }}
        >
          {techRoles1.map((role, index) => (
            <div 
              key={`row1-${index}`}
              className={`bg-gradient-to-r ${role.gradient} rounded-lg px-6 py-3 flex items-center justify-center shadow-md`}
              style={{ minWidth: '240px' }}
            >
              <p className="text-white font-medium text-lg">{role.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Second row of scrolling tech roles */}
      <div className="relative w-full overflow-hidden h-24">
        <div 
          className="absolute flex space-x-6 whitespace-nowrap"
          style={{ transform: `translateX(${position2}px)` }}
        >
          {techRoles2.map((role, index) => (
            <div 
              key={`row2-${index}`}
              className={`bg-gradient-to-r ${role.gradient} rounded-lg px-6 py-3 flex items-center justify-center shadow-md`}
              style={{ minWidth: '240px' }}
            >
              <p className="text-white font-medium text-lg">{role.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechRolesCarousel;