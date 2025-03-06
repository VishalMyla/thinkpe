

const ProfileMatch: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center w-full max-w-[600px]">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5 leading-tight">
          Your profile matches
        </h1>

        <div className="text-[8rem] font-bold my-10">66%</div>

        <div className="text-2xl font-semibold mb-10">with this career goal</div>

        {/* Buttons Section */}
        <div className="flex flex-row justify-center items-center gap-8">
          {/* Apply for Job Button */}
          <div className="relative inline-block w-64 h-20">
            {/* Shadow layer */}
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-md z-0" />

            {/* Button */}
            <button
              type="button"
              onClick={onApply}
              className="relative z-10 bg-white border border-black rounded-md cursor-pointer w-full h-full font-bold text-2xl flex justify-center items-center"
            >
              Apply for Job
            </button>
          </div>

          {/* Career Path Button */}
          <div className="relative inline-block w-64 h-20">
            {/* Shadow layer */}
            <div className="absolute top-2 left-2 w-full h-full bg-black rounded-md z-0" />

            {/* Button */}
            <button
              type="button"
              onClick={onApply}
              className="relative z-10 bg-white border border-black rounded-md cursor-pointer w-full h-full font-bold text-2xl flex justify-center items-center"
            >
              Upskill & Generate My Pathway
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMatch;
