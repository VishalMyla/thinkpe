import { useState } from 'react';
import Image from 'next/image';

interface StatusCardProps {
  title: string;
  description: string;
  imageSrc: string;
  intext: string;
  bgColor: string;
  isSelected: boolean;
  onSelect: () => void;
}

const StatusCard: React.FC<StatusCardProps> = ({ title, description, imageSrc, intext, bgColor, isSelected, onSelect }) => {
  return (
    <button 
      onClick={onSelect}
      className={`relative w-52 min-h-[180px] rounded-2xl transition-transform duration-200 ease-in-out ${isSelected ? 'scale-105 ring-2 ring-blue-500' : ''} cursor-pointer`}>
      <div className="absolute inset-0 w-full h-full bg-black rounded-2xl z-0 translate-x-3 translate-y-3"></div>
      
      <div className="relative w-52 min-h-[180px] rounded-2xl z-10 shadow-lg" style={{ backgroundColor: bgColor }}>
        <div className="p-4 flex flex-col gap-4 rounded-2xl">
          <div>
            <Image
              src={title === "Student" ? "/assets/status/tickblue.png" : "/assets/status/tick.png"}
              height={35}
              width={35}
              alt="tick"
            />
          </div>
          <p className="text-xl text-gray-600 text-start font-normal">{intext}</p>
          <div>
            <Image
              src={imageSrc}
              alt={title}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>
        <div className="p-4 bg-white rounded-b-2xl">
          <p className="font-bold text-start">{title}</p>
          <p className="text-gray-500 text-start">{description}</p>
        </div>
      </div>
    </button>
  );
};

const StatusSelection: React.FC<{ onStatusSelect: () => void }> = ({ onStatusSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const statusOptions = [
    { title: 'Student', description: 'Currently studying', imageSrc: '/assets/status/a.png', bgColor: '#dbe9fb', intext: 'Student' },
    { title: 'Working Currently', description: 'Seeking career growth', imageSrc: '/assets/status/b.png', bgColor: '#fd684f', intext: 'Great for opportunities' },
    { title: 'Graduate', description: 'Seeking opportunities', imageSrc: '/assets/status/c.png', bgColor: '#ffc6bf', intext: 'Graduate' },
    { title: 'Career Switcher', description: 'Exploring new fields.', imageSrc: '/assets/status/d.png', bgColor: '#fde5d7', intext: 'Career growth' }
  ];
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="container mx-auton flex flex-col gap-30">
        <h1 className="text-4xl font-semibold text-center ">What&apos;s your status?</h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-10">
          {statusOptions.map((status, index) => (
            <StatusCard 
              key={index}
              title={status.title} 
              description={status.description}
              imageSrc={status.imageSrc}
              intext={status.intext}
              bgColor={status.bgColor}
              isSelected={selectedIndex === index}
              onSelect={() => {
                setSelectedIndex(index);
                onStatusSelect();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusSelection;
