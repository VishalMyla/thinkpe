import Image from 'next/image';

interface StatusCardProps {
  title: string;
  description: string;
  imageSrc: string;
  intext : string;
}

const StatusCard: React.FC<StatusCardProps> = ({  title, description, imageSrc, intext }) => {
  return (
    <div className="relative w-50 min-h-[160px]">
  {/* Black background (shadow effect) */}
  <div className="absolute inset-0 w-full h-full bg-black rounded-2xl z-0 translate-x-3 translate-y-3"></div>

  {/* Main content div with a higher z-index */}
  <div className="relative w-50 min-h-[160px] bg-[#FCFBFC] rounded-2xl z-10 shadow-lg">
    <div className="p-4 flex flex-col gap-4 rounded-2xl bg-[#dbe9fb]">
      <div>
        {title === "Student" ? (
          <Image
            src="/assets/status/tickblue.png"
            height={35}
            width={35}
            alt="pika"
          />
        ) : (
          <Image
            src="/assets/status/tick.png"
            height={35}
            width={35}
            alt="pika"
          />
        )}
      </div>
      <p className="text-xl text-gray-600 font-normal">{intext}</p>
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
    <div className="p-4  bg-[#FCFBFC] rounded-b-2xl">
      <p className="font-bold">{title}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
</div>


  );
};

interface StatusOption {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  intext : string;
}

const StatusSelection: React.FC = () => {
  const statusOptions: StatusOption[] = [
    { 
      title: 'Student', 
      description: 'Currently studying',
      imageSrc: '/assets/status/a.png',
      bgColor: '#dbe9fb',
      intext: 'Student'
    },
    { 
      title: 'Working Currently', 
      description: 'Seeking career growth',
      imageSrc: '/assets/status/b.png',
      bgColor: '#fd684f',
      intext:'Great for opportunties'
    },
    { 
      title: 'Graduate', 
      description: 'Seeking opportunities',
      imageSrc: '/assets/status/c.png',
      bgColor: '#ffc6bf',
      intext:'Graduate'
    },
    { 
      title: 'Career Switcher', 
      description: 'Exploring new fields.',
      imageSrc: '/assets/status/d.png',
      bgColor: '#fde5d7',
      intext:'Career growth'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-normal text-center mb-12">What&apos;s your status?</h1>
        <div className="flex flex-row items-center justify-center gap-16">
          {statusOptions.map((status, index) => (
           
              <StatusCard 
                key={index}
                title={status.title} 
                description={status.description}
                imageSrc={status.imageSrc}
                intext={status.intext}
              />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusSelection;

