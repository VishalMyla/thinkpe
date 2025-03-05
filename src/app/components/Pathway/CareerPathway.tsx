import React from 'react';

const CareerPathway = () => {
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
                  <div className="text-lg text-center font-thin">Find Your Path</div>
                </div>
               
                
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {careerOptions.map((career, index) => (
                    <button 
                      key={index} 
                      className="
                        border 
                        border-gray-300 
                        rounded-full 
                        py-3 
                        px-6 
                        text-lg 
                        font-thin 
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
  );
};

export default CareerPathway;