// import React from "react";

// const FlowChart = () => {
//   return (
//     <div className="relative w-[500px] h-[350px] mx-auto">
//       <svg className="absolute top-0 left-0 w-full h-full" fill="none" stroke="#6BCF89" strokeWidth="2" strokeDasharray="5,5">
//         {/* Learning to Upskilling */}
//         <path d="M 120 100 Q 250 -20, 380 100" />
//         {/* Upskilling to Advancement */}
//         <path d="M 380 100 Q 420 160, 340 200" />
//         {/* Learning to Success */}
//         <path d="M 120 100 Q 80 200, 150 280" />
//         {/* Advancement to Success */}
//         <path d="M 340 200 Q 250 280, 150 280" />
//       </svg>

//       {/* Labels */}
//       <div className="absolute left-[80px] top-[90px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
//         Learning
//       </div>
//       <div className="absolute left-[360px] top-[90px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
//         Upskilling
//       </div>
//       <div className="absolute left-[320px] top-[190px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
//         Advancement
//       </div>
//       <div className="absolute left-[130px] top-[270px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
//         Success
//       </div>
//     </div>
//   );
// };

// export default FlowChart;

import React from "react";
// // Import your SVG and PNG files directly
// import Svg1 from "/Assets/Arcs/1.svg";
// import Svg2 from "/Assets/Arcs/2.svg";
// import Svg3 from "/Assets/Arcs/3.svg";
// import Png4 from "/Assets/Arcs/4.png";

const FlowChart = () => {
  return (
    <div className="relative w-[500px] h-[350px] mx-auto">
      {/* SVG and PNG images directly from assets */}
      {/* 1.svg: Learning to Upskilling */}
      <div className="absolute" style={{ top: "20px", left: "150px", width: "230px" }}>
        <img 
          src="/Assets/Arcs/1.svg" 
          alt="Learning to Upskilling path" 
          className="w-full"
        />
      </div>

      {/* 2.svg: Upskilling to Advancement */}
      <div className="absolute" style={{ top: "100px", right: "120px", width: "100px" }}>
        <img 
          src="/Assets/Arcs/2.svg"
          alt="Upskilling to Advancement path" 
          className="w-full"
        />
      </div>

      {/* 3.svg: Advancement to Success */}
      <div className="absolute" style={{ top: "200px", left: "180px", width: "160px" }}>
        <img 
          src="/Assets/Arcs/3.svg"
          alt="Advancement to Success path" 
          className="w-full"
        />
      </div>

      {/* 4.png: Learning to Success */}
      <div className="absolute" style={{ top: "120px", left: "100px", width: "80px" }}>
        <img 
          src="/Assets/Arcs/4.png"
          alt="Learning to Success path" 
          className="w-full"
        />
      </div>

      {/* Labels - kept the same as original */}
      <div className="absolute left-[80px] top-[90px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
        Learning
      </div>
      <div className="absolute left-[360px] top-[90px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
        Upskilling
      </div>
      <div className="absolute left-[320px] top-[190px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
        Advancement
      </div>
      <div className="absolute left-[130px] top-[270px] px-4 py-2 bg-white shadow-lg rounded-full font-serif text-lg">
        Success
      </div>
    </div>
  );
};

export default FlowChart;