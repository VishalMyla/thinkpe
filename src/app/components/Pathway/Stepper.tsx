import Image from "next/image";


const Stepper = () => {
  return (
    <div className="flex space-x-4 items-start">
      {/* Sidebar */}
      <div className="flex flex-col w-10 h-50 bg-black rounded-full justify-between py-1 px-0.3 items-center">
        {/* <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <Image src="/assets/status/Icon.svg" alt="Completed" width={16} height={16} />
        </div>
        <div className="w-2 h-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-blue-600"></div>
        <div className="w-2 h-8 bg-gray-200"></div>
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
          <span className="text-white text-sm">2</span>
        </div> */}
        <div className="flex flex-col justify-between items-baseline gap-2">
            <div className="w-9 h-9 rounded-full flex justify-center items-center bg-[#4bde80] ">
              <div>
              <Image src="/assets/status/Icon.svg" alt="Completed" width={16} height={16} /> 
              </div>
              
               
            </div>
            
            <div className="w-2 h-2 rounded-full bg-blue-600">
              
            </div>
          
            <div className="w-2 h-2 rounded-full bg-[#b9b9b9]">
              
            </div>

        </div>
        <div className="w-9 h-9 rounded-full flex justify-center items-center bg-white">
            2
        </div>
      </div>
      
      {/* Content */}
      <div>
        <div>
            <h2 className="text-lg font-normal">Personal Information</h2>
            <div className="flex flex-col gap-1 ">
              <span className="text-blue-600 text-end">Name</span>
              <span className="text-gray-400 text-end">Other</span>
            </div>
            
        </div>
        <div>
        <h2 className="mt-6 text-lg font-normal">Current Status</h2>
        </div>
        
       
        
      </div>
    </div>
  );
};

export default Stepper;
