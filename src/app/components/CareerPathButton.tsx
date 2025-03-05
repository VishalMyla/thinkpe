"use client";

import { useRouter } from "next/navigation";

interface CareerPathButtonProps {
  text: string;
  link: string}

const CareerPathButton: React.FC<CareerPathButtonProps> = ({ text , link  }) => {
  const router = useRouter();

  return (
    <div className="relative inline-block">
      {/* Shadow layer */}
      <div className="absolute top-2 left-2 w-full h-full bg-black rounded-md z-0" />

      {/* Button */}
      <button
        type="button"
        onClick={() => router.push(link)}
        className="relative z-10 bg-white border border-black rounded-md cursor-pointer px-8 py-4 font-bold text-2xl"
      >
        {text}
      </button>
    </div>
  );
};

export default CareerPathButton;
