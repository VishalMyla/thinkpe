import React from 'react';

interface CareerPathwayProps {
  onSelectCareer: (career: string) => void;
}

const CareerPathway: React.FC<CareerPathwayProps> = ({ onSelectCareer }) => {
  const careerOptions = [
    'Doctor', 
    'Lawyer', 
    'Software Developer', 
    'UI/UX Designer', 
    'Engineer'
  ];

  return (
    <div className="flex flex-col items-center justify-between h-[40vh]  bg-white">
       <h1 className="text-4xl font-semibold ">Career Success Pathway</h1>
        <div className="flex flex-col gap-6">
                <div className='flex flex-col gap-2'>
                  <div className="text-2xl text-center font-semibold ">Choose Your Career Goal</div>
                  <div className="text-lg text-center font-normal">Find Your Path</div>
                </div>
               
                
                <div className="flex flex-wrap gap-6 max-w-2xl mx-auto">
  {/* First row - full width */}
  <div className="w-full flex gap-6 flex-row justify-center">
    {careerOptions.slice(0, 3).map((career, index) => (
      <button 
        key={index} 
        onClick={() => onSelectCareer(career)}
        className="
          border 
          border-black
          rounded-full 
          py-3 
          px-6 
          text-lg 
          font-normal 
          hover:bg-gray-100 
          transition-colors 
          duration-200
        "
      >
        {career}
      </button>
    ))}
  </div>
  
  {/* Second row - centered */}
  <div className="w-full flex justify-center gap-6">
    {careerOptions.slice(3).map((career, index) => (
      <button 
        key={index + 3} 
        onClick={() => onSelectCareer(career)}
        className="
          border 
          border-black
          rounded-full 
          py-3 
          px-6 
          text-lg 
          font-normal 
          hover:bg-gray-100 
          transition-colors 
          duration-200
        "
      >
        {career}
      </button>
    ))}
  </div>
</div>
        </div>
        
      
    </div>
  );
};

export default CareerPathway;